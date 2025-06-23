import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap"
import chatify from "../../assets/projects/chatify.png"

function Projects() {
    return (
        <Container fluid className="pt-40 relative pb-8">
            <Container>
                <h1 className="heading text-center">My Recent <strong className="spanText">Works</strong></h1>
                <Row className="justify-center">
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            images={[
                                "vite.svg",
                                "react.svg"
                            ]}
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Chatify"
                            text="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink
                            demoLink
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
