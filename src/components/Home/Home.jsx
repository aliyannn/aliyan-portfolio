import { Helmet } from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import Button from "../Button";
import Typewrite from './Typewrite';
import Intro from './Intro';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TbArrowUpRight } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <>
      <Helmet>
        <title>Aliyan Gohar | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Aliyan Gohar – a frontend developer specializing in React, and modern web technologies. Explore my projects and experience."
        />
        <link rel="canonical" href="https://aliyannn.vercel.app/" />
      </Helmet>

      <section>
        <Container fluid className='pt-30' id='home'>
          <Container>
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
      </section>
    </>
  );
}

export default Home;
