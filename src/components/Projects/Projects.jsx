import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap"
import chatify from "../../assets/projects/chatify.webp"

function Projects() {
    return (
        <Container fluid className="pt-40 relative pb-8">
            <Container>
                <h1 className="heading text-center">My Recent <strong className="spanText">Works</strong></h1>
                <Row className="justify-center">
                    <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Portfolio"
                            images={[
                                "vite.svg",
                                "react.svg",
                                "javascript.svg",
                                "threejs.svg",
                                "tailwind.svg",
                                "vercel.svg"
                            ]}
                            text="Personal portfolio showcasing Aliyan's software development work and skills. 
                            Features responsive design, smooth animations, dynamic content, and social media integration."
                            ghLink="https://github.com/aliyannn/aliyan-portfolio"
                            demoLink="https://aliyannn.vercel.app/"
                        />
                    </Col>
                   <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Portfolio"
                            images={[
                                "vite.svg",
                                "react.svg",
                                "javascript.svg",
                                "threejs.svg",
                                "tailwind.svg",
                                "vercel.svg"
                            ]}
                            text="Personal portfolio showcasing Aliyan's software development work and skills. 
                            Features responsive design, smooth animations, dynamic content, and social media integration."
                            ghLink="https://github.com/aliyannn/aliyan-portfolio"
                            demoLink="https://aliyannn.vercel.app/"
                        />
                    </Col>
                   <Col md={4} className="projectCard">
                        <ProjectCards
                            img={chatify}
                            title="Portfolio"
                            images={[
                                "vite.svg",
                                "react.svg",
                                "javascript.svg",
                                "threejs.svg",
                                "tailwind.svg",
                                "vercel.svg"
                            ]}
                            text="Personal portfolio showcasing Aliyan's software development work and skills. 
                            Features responsive design, smooth animations, dynamic content, and social media integration."
                            ghLink="https://github.com/aliyannn/aliyan-portfolio"
                            demoLink="https://aliyannn.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
