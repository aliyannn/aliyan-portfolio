import { useRef, useState } from "react";
import { motion } from "framer-motion";
import MouseGradientButton from "./MouseGradientButton"
import { LuSquareArrowOutUpRight } from "react-icons/lu";

function ProjectCards({ img, title, images, text, ghLink, demoLink, index = 0 }) {
    const techBgColors = {
        "react.svg": "bg-blue-800",
        "javascript.svg": "bg-yellow-300",
        "vite.svg": "bg-purple-500",
        "threejs.svg": "bg-gray-800",
        "tailwind.svg": "bg-blue-900",
        "vercel.svg": "bg-white",
        "shopify.svg": "bg-green-900",
        "wordpress.svg": "bg-blue-900",
        "woocommerce.svg": "bg-purple-900",
        "php.svg": "bg-purple-800",
        "mysql.svg": "bg-orange-600",
        "nginx.svg": "bg-green-600",
        "elementor.svg": "bg-pink-800",
    };

    const [hovered, setHovered] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = btnRef.current?.getBoundingClientRect();
        if (!rect) return;
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="rounded-2xl backdrop-blur-7xl border-none bg-white/10 shadow-lg flex flex-col md:flex-row overflow-hidden"
        >
            {/* Image Section with Hover Overlay */}
            <div
                className="relative md:w-1/2 w-full flex justify-center items-center p-4"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="relative inline-block">
                    <motion.img
                        src={img}
                        alt={title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="object-contain w-full h-auto max-w-xs md:max-w-full transition-transform duration-300"
                    />

                    {/* Hover Overlay */}
                    {demoLink && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center rounded-lg"
                        >
                            <motion.a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={btnRef}
                                onMouseMove={handleMouseMove}
                                className="relative px-10 py-4 inline-flex items-center gap-2 text-white text-md font-semibold rounded-md overflow-hidden border border-white/20"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-400 to-teal-500 opacity-30 rounded-full pointer-events-none"
                                    style={{
                                        left: coords.x,
                                        top: coords.y,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    animate={{
                                        left: coords.x,
                                        top: coords.y,
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                />
                                <LuSquareArrowOutUpRight />
                                <span className="relative z-10">View Website</span>
                            </motion.a>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center gap-4 text-white text-center md:text-left items-center md:items-start">
                {/* Title */}
                <h3 className="text-2xl font-bold">{title}</h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {images?.map((imageSrc, index) => {
                        const bgColor = techBgColors[imageSrc] || "bg-gray-700";
                        return (
                            <div
                                key={index}
                                className={`w-9 h-9 flex items-center justify-center rounded-lg ${bgColor} transition duration-300 hover:scale-110 shadow-md`}
                            >
                                <img
                                    src={imageSrc}
                                    alt={`tech-${index}`}
                                    className="p-2 object-contain"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm text-justify md:text-left">{text}</p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {ghLink && (
                        <MouseGradientButton
                            href={ghLink}
                            icon="github"
                            text="Github"
                        />
                    )}
                    {demoLink && (
                        <MouseGradientButton
                            href={demoLink}
                            icon="demo"
                            text="Demo"
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCards;
