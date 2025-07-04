import { Container, Row, Col } from 'react-bootstrap'
import Tilt from "react-parallax-tilt"
import myImg from "../../assets/aliyangohar image.webp"
import Button from "../Button";
import { IoCodeDownload } from "react-icons/io5";
import resumePDF from "../../assets/Aliyan Gohar Resume - Software Engineer.pdf";

function Intro() {
    return (
        <Container fluid className='pt-30' id='intro'>
            <Container>
                <Row className='text-white items-center text-left'>
                    <Col md={7}>
                        <h2 className='heading uppercase pb-4'>Get to
                            <strong className='flash-purple'> Know Me</strong>
                        </h2>
                        <div className='leading-10 text-[16px] text-justify'>
                            <p>
                                Hi, I'm Aliyan, and I am passionate about creating intuitive, user-friendly web
                                applications that provide a seamless experience for users. I am always eager to
                                learn new technologies and stay up-to-date with industry trends. I am a team player
                                and enjoy collaborating with other developers to find creative solutions to
                                challenging problem. I'm open to Job opportunities. If you think my skills are
                                relevant to your job requirements then do contact me.
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            href={resumePDF}
                            className="no-hover-underline downloadButton"
                            download
                        >
                            Download Resume
                            <span className='arrow-icon'><IoCodeDownload /></span>
                        </Button>
                    </Col>

                    <Col md={5} className='p-0 flex justify-center items-center'>
                        <Tilt>
                            <img src={myImg} alt="Aliyan | Software Engineer | React Developer | WordPress Developer" loading="lazy" width={300} height={300} />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Intro
