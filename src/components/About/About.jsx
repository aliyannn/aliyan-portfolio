import { Container, Row, Col } from "react-bootstrap"
import AboutInfo from './AboutInfo'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() {
    return (
        <Container fluid className='pt-40 pb-20 text-justify'>
            <Container>
                <Row className='justify-center'>
                    <Col md={7} className='justify-center'>
                        <h1 className='heading text-center pb-10'>
                            Get to <strong className='spanText'>Know Me</strong>
                        </h1>
                        <AboutInfo />
                    </Col>
                    <Col md={5}>
                        <DotLottieReact
                            src="https://lottie.host/495c42b1-872c-49b1-82ff-f49e4e6bf19a/jtceaE8Zv2.lottie"
                            loop
                            autoplay
                            height={800}
                            width={800}
                        />
                    </Col>
                </Row>
                <h2 className="pt-20 pb-10 heading text-center">My <strong className="spanText">Tech Stack</strong></h2>
                <Techstack />
                <h2 className="pt-20 pb-10 heading text-center">My <strong className="spanText">Tool Stack</strong></h2>
                <Toolstack />
            </Container>
        </Container>
    )
}

export default About
