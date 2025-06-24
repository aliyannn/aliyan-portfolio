import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import myImg from "../../assets/aliyangohar image.png"
import Tilt from "react-parallax-tilt"
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Intro() {
    return (
        <Container fluid className='pt-30' id='intro'>
            <Container>
                <Row className='text-white items-center'>
                    <Col md={7}>
                        <h2 className='heading uppercase pb-4'>
                            <strong className='flash-purple'>About Me</strong>
                        </h2>
                        <div className='leading-10 text-[16px] text-justify'>
                            <p>
                                Hello! I'm Aliyan Gohar, a Software Engineer passionate about frontend designs and UI.
                                I focus on creating scalable, efficient, and innovative systems. My expertise covers cloud platforms
                                (AWS, Azure), containerization (Docker, Kubernetes), and CI/CD pipelines, complemented by strong
                                full-stack development skills. Currently pursuing a B.Tech in Computer Science Engineering at SRM
                                Institute of Science and Technology, my hands-on experience spans a wide array of tools and platforms
                                within the DevOps, Cloud, and ML ecosystems.
                            </p>
                        </div>
                    </Col>

                    <Col md={5} className='p-0 flex justify-center items-center'>
                        <Tilt>
                            <img src={myImg} alt="aliyan gohar" width={300} height={300} />
                            {/* <DotLottieReact
                                src="https://lottie.host/eed0e8c3-4aad-47ca-b576-309a77d3eb2f/iaxGTjlLAc.lottie"
                                loop
                                autoplay
                                height={6000}
                                width={6000}
                            /> */}
                        </Tilt>
                    </Col>
                </Row>
                <Row className='text-center text-white py-20'>
                    <Col md={12}>
                        <h2>FIND ME ON</h2>
                        <p>Feel free to <span className='spanText'>connect</span> with me</p>
                        <ul className='homeSocialIconsList'>
                            <li className='socialIcons'>
                                <a
                                    href="https://www.linkedin.com/in/allygohar/"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='homeSocialIcons glow-animate'
                                >
                                    <FaLinkedin className='iconStyle' />
                                </a>
                            </li>
                            <li className='socialIcons'>
                                <a
                                    href="https://github.com/aliyannn"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='homeSocialIcons glow-animate'
                                >
                                    <FaGithub className='iconStyle' />
                                </a>
                            </li>
                            <li className='socialIcons'>
                                <a
                                    href="https://x.com/aliyan_gohar"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='homeSocialIcons glow-animate'
                                >
                                    <FaXTwitter className='iconStyle' />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Intro
