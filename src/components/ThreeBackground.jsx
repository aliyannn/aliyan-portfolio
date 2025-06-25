import { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const getWidth = () => window.visualViewport?.width || window.innerWidth;
        const getHeight = () => window.visualViewport?.height || window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, getWidth() / getHeight(), 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(getWidth(), getHeight());
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        scene.fog = new THREE.FogExp2(0x0b0c1a, 0.002);

        // Stars
        const starCount = 2000;
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 800;
        }
        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1.5,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            depthWrite: false
        });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Orbiting planets
        const orbitGroup = new THREE.Group();
        scene.add(orbitGroup);
        const loader = new TextureLoader();
        const ringTexture = loader.load("https://threejs.org/examples/textures/saturnringcolor.jpg");

        const planetData = [
            { name: "mercury", texture: "https://threejs.org/examples/textures/planets/mercury.jpg", size: 0.5, orbitRadius: 8, speed: 0.01 },
            { name: "venus", texture: "https://threejs.org/examples/textures/planets/venus_surface.jpg", size: 0.7, orbitRadius: 12, speed: 0.008 },
            {
                name: "earth", texture: "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg", size: 1, orbitRadius: 16, speed: 0.006,
                moon: {
                    texture: "https://threejs.org/examples/textures/planets/moon_1024.jpg", size: 0.2, orbitRadius: 2, speed: 0.03
                }
            },
            { name: "mars", texture: "https://threejs.org/examples/textures/planets/mars_1k_color.jpg", size: 0.6, orbitRadius: 20, speed: 0.005 },
            { name: "jupiter", texture: "https://threejs.org/examples/textures/planets/jupiter.jpg", size: 2.5, orbitRadius: 28, speed: 0.003 },
            { name: "saturn", texture: "https://threejs.org/examples/textures/planets/saturn.jpg", size: 2, orbitRadius: 35, speed: 0.002, ring: true }
        ];

        const planets = [];

        planetData.forEach((data) => {
            loader.load(data.texture, (texture) => {
                const geometry = new THREE.SphereGeometry(data.size, 32, 32);
                const material = new THREE.MeshStandardMaterial({ map: texture });
                const planet = new THREE.Mesh(geometry, material);

                planet.userData = {
                    orbitRadius: data.orbitRadius,
                    angle: Math.random() * Math.PI * 2,
                    speed: data.speed
                };

                const glow = new THREE.Mesh(
                    new THREE.SphereGeometry(data.size * 1.5, 32, 32),
                    new THREE.MeshBasicMaterial({ color: 0x9999ff, transparent: true, opacity: 0.1, side: THREE.BackSide })
                );
                planet.add(glow);

                if (data.ring) {
                    const ringGeo = new THREE.RingGeometry(3, 5, 64);
                    const ringMat = new THREE.MeshBasicMaterial({ map: ringTexture, side: THREE.DoubleSide, transparent: true });
                    const ring = new THREE.Mesh(ringGeo, ringMat);
                    ring.rotation.x = Math.PI / 2;
                    planet.add(ring);
                }

                if (data.name === "earth" && data.moon) {
                    loader.load(data.moon.texture, (moonTexture) => {
                        const moon = new THREE.Mesh(
                            new THREE.SphereGeometry(data.moon.size, 32, 32),
                            new THREE.MeshStandardMaterial({ map: moonTexture })
                        );
                        moon.userData = { orbitRadius: data.moon.orbitRadius, angle: 0, speed: data.moon.speed };
                        planet.add(moon);
                        planet.userData.moon = moon;
                    });
                }

                orbitGroup.add(planet);
                planets.push(planet);
            });
        });

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(0, 0, 0);
        scene.add(light);

        // Shooting Stars
        const shootingStars = [];
        for (let i = 0; i < 5; i++) {
            const star = new THREE.Mesh(
                new THREE.SphereGeometry(0.2, 16, 16),
                new THREE.MeshBasicMaterial({ color: 0xffffee })
            );
            const trailGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(-1, -1, -1)
            ]);
            const trailMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
            const trail = new THREE.Line(trailGeo, trailMat);
            star.add(trail);
            scene.add(star);
            shootingStars.push({
                star,
                speed: 0.5 + Math.random(),
                direction: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0).normalize()
            });
        }

        // 🌠 Comet
        const comet = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffcccc })
        );
        const cometTrailPoints = Array.from({ length: 20 }, () => new THREE.Vector3(0, 0, 0));
        const cometTrailGeo = new THREE.BufferGeometry().setFromPoints(cometTrailPoints);
        const cometTrailMat = new THREE.LineBasicMaterial({ color: 0xffcccc, transparent: true, opacity: 0.7 });
        const cometTrail = new THREE.Line(cometTrailGeo, cometTrailMat);
        comet.add(cometTrail);
        scene.add(comet);

        let cometAngle = 0;

        // Parallax
        const mouse = { x: 0, y: 0 };
        document.addEventListener("mousemove", (e) => {
            mouse.x = (e.clientX / getWidth()) * 2 - 1;
            mouse.y = -(e.clientY / getHeight()) * 2 + 1;
        });

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0005;
            stars.rotation.x += 0.0003;

            planets.forEach((planet) => {
                planet.userData.angle += planet.userData.speed;
                planet.position.set(
                    Math.cos(planet.userData.angle) * planet.userData.orbitRadius,
                    Math.sin(planet.userData.angle) * planet.userData.orbitRadius,
                    0
                );
                if (planet.userData.moon) {
                    planet.userData.moon.userData.angle += planet.userData.moon.userData.speed;
                    planet.userData.moon.position.set(
                        Math.cos(planet.userData.moon.userData.angle) * planet.userData.moon.userData.orbitRadius,
                        Math.sin(planet.userData.moon.userData.angle) * planet.userData.moon.userData.orbitRadius,
                        0
                    );
                }
            });

            shootingStars.forEach(({ star, speed, direction }) => {
                star.position.add(direction.clone().multiplyScalar(speed));
                if (star.position.length() > 400) {
                    star.position.set(0, 0, 0);
                }
            });

            cometAngle += 0.002;
            comet.position.set(
                Math.cos(cometAngle) * 60,
                Math.sin(cometAngle * 0.8) * 30,
                Math.sin(cometAngle * 2) * 10
            );

            const trailPositions = cometTrail.geometry.attributes.position.array;
            for (let i = trailPositions.length - 3; i >= 3; i--) {
                trailPositions[i] = trailPositions[i - 3];
            }
            trailPositions[0] = comet.position.x;
            trailPositions[1] = comet.position.y;
            trailPositions[2] = comet.position.z;
            cometTrail.geometry.attributes.position.needsUpdate = true;

            camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = getWidth();
            const height = getHeight();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
            renderer.dispose();
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
                pointerEvents: "none",
            }}
        />
    );
};

export default ThreeBackground;
