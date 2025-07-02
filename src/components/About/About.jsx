import { Container, Row, Col } from "react-bootstrap";
import Intro from './Intro'
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Experience from "./Experience";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() {
    return (
        <>
            <section id="about">
                <Intro />
                <Container fluid className='pt-30 text-justify'>
                    <Container>
                        <Row className='justify-center'>
                            <Col md={12} className='justify-center'>
                                <Experience />
                            </Col>
                        </Row>

                        <h2 className="pt-30 pb-10 heading text-center">
                            My <strong className="spanText">Tech Stack</strong>
                        </h2>
                        <Techstack />

                        <h2 className="pt-30 pb-10 heading text-center">
                            My <strong className="spanText">Tool Stack</strong>
                        </h2>
                        <Toolstack />
                    </Container>
                </Container>
            </section>
        </>
    );
}

export default About;
