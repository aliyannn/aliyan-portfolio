import MouseGradientButton from "./MouseGradientButton";

function ProjectCards({ img, title, images, text, ghLink, demoLink }) {
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
        "elementor.svg": "bg-pink-800"
    };

    return (
        <div className="rounded-2xl backdrop-blur-7xl border-none bg-white/10 shadow-lg flex flex-col md:flex-row overflow-hidden">
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center bg-transparent p-2">
                <img
                    src={img}
                    alt={title}
                    className="w-full max-w-xs h-auto object-cover md:max-w-full md:h-full"
                />
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
                <p className="text-gray-300 text-sm text-justify md:text-left">
                    {text}
                </p>

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
        </div>
    );
}

export default ProjectCards;
