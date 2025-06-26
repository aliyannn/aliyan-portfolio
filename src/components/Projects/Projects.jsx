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
                            title="Portfolio"
                            images={[
                                "vite.svg",
                                "react.svg",
                                "javascript.svg",
                                "threejs.svg",
                                "tailwind.svg",
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
                                "vercel.png"
                            ]}
                            text="A fully responsive and visually dynamic portfolio built using React with Vite, styled with Tailwind CSS and enhanced by Three.js for immersive 3D animations. The project structure is optimized for performance and scalability across all devices."
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
