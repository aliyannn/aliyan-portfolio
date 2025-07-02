import { Container } from "react-bootstrap";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
    return (
        <section id="projects" className="pt-30">
            <Container>
                <h1 className="heading text-center mb-10">
                    My Recent <strong className="spanText">Works</strong>
                </h1>
                <ProjectsCarousel />
            </Container>
        </section>
    );
}

export default Projects;
