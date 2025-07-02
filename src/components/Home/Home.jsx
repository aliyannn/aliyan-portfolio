import { Container, Row, Col } from 'react-bootstrap';
import Button from "../Button";
import Typewrite from './Typewrite';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TbArrowUpRight } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <>
      <section>
        <Container fluid id='home'>
          <Container className='pt-30 homeBg'>
            <Row className='align-items-center'>
              <Col md={7}>
                <h1>
                  Hi, I'm <strong className='spanText'>Aliyan</strong>
                  <span className='wave' role='img'>👋🏻</span>
                </h1>

                <div className='flex py-10 typewriter'>
                  <h2>I'm a&nbsp;</h2>
                  <Typewrite />
                </div>

                <div className='text-left flex gap-4 pt-2'>
                  <Button variant='primary' href="https://www.linkedin.com/in/allygohar/">
                    Connect on Linkedin <TbArrowUpRight />
                  </Button>
                  <Button variant='outline' href="mailto:aliyangohar00@outlook.com">
                    Hire Me!
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
      </section>
    </>
  );
}

export default Home;
