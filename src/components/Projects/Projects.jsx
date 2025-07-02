import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import chatify from "../../assets/projects/chatify.webp";

function Projects() {
    return (
        <>
            <section id="projects" className="pt-30">
                <Container>
                    <h1 className="heading text-center">
                        My Recent <strong className="spanText">Works</strong>
                    </h1>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
                                    "vercel.svg",
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
                                title="Digi Dukaan"
                                images={[
                                    "wordpress.svg",
                                    "woocommerce.svg",
                                    "elementor.svg",
                                    "php.svg",
                                    "mysql.svg",
                                    "nginx.svg",
                                ]}
                                text="Multi-vendor eCommerce platform built for Pakistanis. Features include 
                                user-friendly vendor dashboards, secure checkout, product management, and 
                                responsive design optimized for mobile and desktop."
                                ghLink="https://github.com/aliyannn/aliyan-portfolio"
                                demoLink="https://aliyannn.vercel.app/"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Projects;
