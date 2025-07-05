import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Galaxy Background
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 3000;
      const y = (Math.random() - 0.5) * 3000;
      const z = (Math.random() - 0.5) * 3000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Light source
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Mouse movement for parallax
    const targetCameraPosition = { x: 0, y: 0 };
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetCameraPosition.x = x * 20;
      targetCameraPosition.y = y * 20;
    });

    // Shooting Star
    let shootingStar;
    let shootingStarVelocity;
    let shootingStarTimeout = 0;
    let shootingStarTrail;

    const createShootingStar = () => {
      if (shootingStar) scene.remove(shootingStar);
      if (shootingStarTrail) scene.remove(shootingStarTrail);

      const geometry = new THREE.SphereGeometry(0.6, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      shootingStar = new THREE.Mesh(geometry, material);
      shootingStar.position.set(-150, 80, 20);
      shootingStarVelocity = new THREE.Vector3(1, -0.4, -0.2).normalize().multiplyScalar(2);
      scene.add(shootingStar);

      // Trail
      const trailPoints = [
        shootingStar.position.clone(),
        shootingStar.position.clone().add(shootingStarVelocity.clone().multiplyScalar(-10))
      ];
      const trailGeometry = new THREE.BufferGeometry().setFromPoints(trailPoints);
      const trailMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      shootingStarTrail = new THREE.Line(trailGeometry, trailMaterial);
      scene.add(shootingStarTrail);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Shooting Star logic
      if (!shootingStar && Date.now() > shootingStarTimeout) {
        createShootingStar();
        shootingStarTimeout = Date.now() + 5000 + Math.random() * 5000;
      }

      if (shootingStar) {
        shootingStar.position.add(shootingStarVelocity);

        if (shootingStarTrail) {
          const points = [
            shootingStar.position.clone(),
            shootingStar.position.clone().add(shootingStarVelocity.clone().multiplyScalar(-10))
          ];
          shootingStarTrail.geometry.setFromPoints(points);
        }

        if (shootingStar.position.length() > 300) {
          scene.remove(shootingStar);
          scene.remove(shootingStarTrail);
          shootingStar = null;
          shootingStarTrail = null;
        }
      }

      // Mouse parallax
      camera.position.x += (targetCameraPosition.x - camera.position.x) * 0.05;
      camera.position.y += (targetCameraPosition.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
    //   mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ThreeBackground;
