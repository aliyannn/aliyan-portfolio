import Card from "react-bootstrap/Card";
import MouseGradientButton from "./MouseGradientButton";

function ProjectCards(props) {
    const techBgColors = {
        "react.svg": "bg-blue-800",
        "javascript.svg": "bg-yellow-300",
        "/src/assets/techStack/vite.svg": "bg-purple-500",
        "threejs.svg": "bg-gray-800",
        "tailwind.svg": "bg-blue-900",
        "vercel.svg": "bg-white",
    };
    return (
        <Card className="projectCardView bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-md items-center">
            <Card.Img variant="top" src={props.img} alt="" className="object-cover w-full h-auto" />

            <Card.Body className="px-4 py-6 text-white">
                <h3 className="text-xl font-semibold text-center mb-2">{props.title}</h3>

                <div className="flex flex-wrap justify-center gap-2 my-4">
                    {props.images?.map((imageSrc, index) => {
                        const bgColor = techBgColors[imageSrc] || "bg-gray-700";

                        return (
                            <div
                                key={index}
                                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg ${bgColor} transition duration-300 hover:scale-110 shadow-md`}
                            >
                                <img
                                    src={imageSrc}
                                    alt={`tech-${index}`}
                                    loading="lazy"
                                    className="p-2 projectTechStack object-contain"
                                />
                            </div>
                        );
                    })}
                </div>

                <Card.Text className="text-sm text-gray-300 text-justify">
                    {props.text}
                </Card.Text>

                <div className="flex justify-center flex-wrap gap-4 mt-6">
                    {props.ghLink && (
                        <MouseGradientButton
                            href={props.ghLink}
                            icon="github"
                            text="Github"
                        />
                    )}
                    {props.demoLink && (
                        <MouseGradientButton
                            href={props.demoLink}
                            icon="demo"
                            text="Demo"
                        />
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
