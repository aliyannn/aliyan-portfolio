import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function MouseGradientButton({ icon, text, href }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // More visible tilt by increasing angle
    const rotateX = -(y - centerY) / 3;   // lower divisor = more tilt
    const rotateY = (x - centerX) / 3;

    btnRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center gap-2 text-sm px-6 py-2 rounded-md text-white overflow-hidden group shadow-xl transition-all duration-300 ease-out"
      style={{
        background:
          "linear-gradient(120deg, var(--light-purple), var(--accent-purple), var(--primary-purple))",
        backgroundSize: "400%",
        backgroundPosition: "center",
        textDecoration: "none",
        transformStyle: "preserve-3d",
      }}
    >
      <span className="z-10 flex items-center gap-2">
        {icon === "github" && <FaGithub />}
        {icon === "demo" && <CgWebsite />}
        {text}
      </span>

      <span
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--x) var(--y), var(--primary-purple), transparent 60%)",
          transition: "opacity 0.3s",
        }}
      ></span>
    </a>
  );
}

export default MouseGradientButton;
