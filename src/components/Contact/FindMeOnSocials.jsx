import { Container, Row, Col } from 'react-bootstrap'
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FindMeOnSocials() {
    return (
        <div>
            <Container fluid>
                <Container>
                    <Row className='text-center text-white py-20'>
                        <Col md={12}>
                            <h2 className='heading text-center'>FIND ME ON</h2>
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
        </div>
    )
}

export default FindMeOnSocials
