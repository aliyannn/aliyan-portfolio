import Card from "react-bootstrap/Card";
import MouseGradientButton from "./MouseGradientButton";

function ProjectCards(props) {
    return (
        <Card className="projectCardView bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-md items-center">
            <Card.Img variant="top" src={props.img} alt="" className="object-cover w-full h-auto" />

            <Card.Body className="px-4 py-6 text-white">
                <h3 className="text-xl font-semibold text-center mb-2">{props.title}</h3>

                <div className="flex flex-wrap justify-center gap-3 my-4">
                    {props.images?.map((imageSrc, index) => (
                        <img
                            key={index}
                            src={imageSrc}
                            alt={`project-tech-${index}`}
                            className="w-[11%] h-auto object-contain projectTechStack"
                        />
                    ))}
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
