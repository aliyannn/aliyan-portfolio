import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import ExperienceSection from "../ExperienceSection";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() {
    return (
        <>
            <Helmet>
                <title>About | Aliyan Gohar</title>
                <meta
                    name="description"
                    content="Learn more about Aliyan Gohar, a frontend developer skilled in React, TailwindCSS, Three.js, and modern tools. Explore his tech and tool stacks."
                />
                <link rel="canonical" href="https://aliyannn.vercel.app/about" />
            </Helmet>

            <Container fluid className='pt-20 pb-20 text-justify'>
                <Container>
                    <Row className='justify-center'>
                        <Col md={12} className='justify-center'>
                            <ExperienceSection />
                        </Col>
                    </Row>

                    <h2 className="lg:pt-20 md:pt-10 pb-10 heading text-center">
                        My <strong className="spanText">Tech Stack</strong>
                    </h2>
                    <Techstack />

                    <h2 className="pt-20 pb-10 heading text-center">
                        My <strong className="spanText">Tool Stack</strong>
                    </h2>
                    <Toolstack />
                </Container>
            </Container>
        </>
    );
}

export default About;
