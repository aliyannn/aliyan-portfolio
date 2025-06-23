import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from "../Button"
import Typewrite from './Typewrite'
import Intro from './Intro'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TbArrowUpRight } from "react-icons/tb";
import Tilt from "react-parallax-tilt"

function Home() {
    return (
        <section>
            <Container fluid className='pt-40' id='home'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={7}>
                            <h1>Hello, I'm</h1>

                            <h2>
                                <strong className='spanText'> Aliyan Gohar</strong>
                                <span className='wave' role='img'>👋🏻</span>
                            </h2>

                            <div className='text-left py-10'>
                                <Typewrite />
                            </div>

                            <div className='text-left flex gap-4 pt-2'>
                                <Button variant='primary' href="https://www.linkedin.com/in/allygohar/">
                                    Connect on Linkedin
                                    <TbArrowUpRight />
                                </Button>
                                <Button variant='outline' href="/projects">
                                    View Projects
                                </Button>
                            </div>
                        </Col>

                        <Col md={5}>
                            <Tilt>
                                <DotLottieReact
                                    src="https://lottie.host/c9a9306e-4292-45eb-ae96-36972b0d7352/ec8XMJ9lS9.lottie"
                                    loop
                                    autoplay
                                    height={500}
                                    width={500}
                                />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Intro />
        </section >
    )
}

export default Home