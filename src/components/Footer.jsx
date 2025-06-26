import { Container, Row, Col } from "react-bootstrap"
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <Container fluid className="footer">
                <Row>
                    <Col md={4}>
                        <h3>Designed & Developed by Aliyan Gohar.</h3>
                    </Col>
                    <Col md={4}>
                        <h3>Copyright © {year} aliyan.</h3>
                    </Col>
                    <Col md={4} className="text-center">
                        <ul className="mb-1">
                            <li className="inline-block pr-6 grow">
                                <a
                                    href="https://www.linkedin.com/in/allygohar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className="inline-block pr-6 grow">
                                <a
                                    href="https://github.com/aliyannn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li className="inline-block grow">
                                <a
                                    href="https://x.com/aliyan_gohar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaXTwitter />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
