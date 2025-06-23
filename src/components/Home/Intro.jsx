import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tilt from "react-parallax-tilt"
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Intro() {
    return (
        <Container fluid className='pt-30'>
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
                            <DotLottieReact
                                src="https://lottie.host/eed0e8c3-4aad-47ca-b576-309a77d3eb2f/iaxGTjlLAc.lottie"
                                loop
                                autoplay
                                height={6000}
                                width={6000}
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row className='text-center text-white py-20'>
                    <Col md={12}>
                        <h2>FIND ME ON</h2>
                        <p>Feel free to <span className='spanText'>connect</span> with me</p>
                        <ul className='home-about-social-links'>
                            <li className='socialIcons'>
                                <a
                                    href="https://www.linkedin.com/in/allygohar/"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#2b0037] shadow-[0_0_10px_rgba(205,95,248,0.3)] hover:shadow-[0_0_20px_#cd5ff8] hover:scale-105 transition-all duration-300 glow-animate'
                                >
                                    <FaLinkedin className='text-[#cd5ff8] text-[1.8em] transition-all duration-300' />
                                </a>
                            </li>
                            <li className='socialIcons'>
                                <a
                                    href="https://github.com/aliyannn"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#2b0037] shadow-[0_0_10px_rgba(205,95,248,0.3)] hover:shadow-[0_0_20px_#cd5ff8] hover:scale-105 transition-all duration-300 glow-animate'
                                >
                                    <FaGithub className='text-[#cd5ff8] text-[1.8em] transition-all duration-300' />
                                </a>
                            </li>
                            <li className='socialIcons'>
                                <a
                                    href="https://x.com/aliyan_gohar"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#2b0037] shadow-[0_0_10px_rgba(205,95,248,0.3)] hover:shadow-[0_0_20px_#cd5ff8] hover:scale-105 transition-all duration-300 glow-animate'
                                >
                                    <FaXTwitter className='text-[#cd5ff8] text-[1.8em] transition-all duration-300' />
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
