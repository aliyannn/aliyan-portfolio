import { Helmet } from "react-helmet";
import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import chatify from "../../assets/projects/chatify.webp";

function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects | Aliyan Gohar</title>
                <meta
                    name="description"
                    content="Explore featured projects built by Aliyan Gohar using React, Vite, Three.js, Tailwind, and more."
                />
                <link rel="canonical" href="https://aliyannn.vercel.app/projects" />
            </Helmet>

            <section id="projects" className="pt-30">
                <Container>
                    <h1 className="heading text-center">
                        My Recent <strong className="spanText">Works</strong>
                    </h1>
                    <Row className="justify-center">
                        {[1, 2, 3].map((_, index) => (
                            <Col key={index} md={4} className="projectCard">
                                <ProjectCards
                                    img={chatify}
                                    title="Portfolio"
                                    images={[
                                        "vite.svg",
                                        "react.svg",
                                        "javascript.svg",
                                        "threejs.svg",
                                        "tailwind.svg",
                                        "vercel.svg",
                                    ]}
                                    text="Personal portfolio showcasing Aliyan's software development work and skills. 
                        Features responsive design, smooth animations, dynamic content, and social media integration."
                                    ghLink="https://github.com/aliyannn/aliyan-portfolio"
                                    demoLink="https://aliyannn.vercel.app/"
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Projects;
