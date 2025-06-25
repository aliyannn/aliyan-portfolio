import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
    return (
        <Card className="projectCardView">
            <Card.Img variant="top" src={props.img} alt="" />
            <Card.Body>
                <Card.Title className="text-white">{props.title}</Card.Title>

                <div className="flex flex-wrap justify-center text-center gap-4 my-4">
                    {props.images?.map((imageSrc, index) => (
                        <img
                            key={index}
                            src={imageSrc}
                            alt={`project-${index}`}
                            className="w-[10%] h-[auto] object-contain"
                        ></img>
                    ))}
                </div>

                <Card.Text className="text-justify text-white">{props.text}</Card.Text>
                <Button
                    variant="primary"
                    href={props.ghLink}
                    target="_blank"
                    style={{
                        marginRight: "20px", fontSize: "14px", padding: "4px 30px", display: "inline-flex",
                        justifyContent: "center", alignItems: "center", gap: "4px"
                    }}
                >
                    <FaGithub />
                    {"Github"}
                </Button>
                <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{
                        marginRight: "20px", fontSize: "14px", padding: "4px 30px", display: "inline-flex",
                        justifyContent: "center", alignItems: "center", gap: "4px"
                    }}
                >
                    <CgWebsite />
                    {"Demo"}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCards
