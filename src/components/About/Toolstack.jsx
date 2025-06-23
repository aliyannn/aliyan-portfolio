import { Row, Col } from "react-bootstrap"
import {
    BiLogoVisualStudio,
    BiLogoSlack,
    BiLogoWindows
} from "react-icons/bi";
import { SiVercel, SiLinux } from "react-icons/si";

function Techstack() {
    return (
        <Row className="justify-center">
            <Col xs={4} md={2} className="techIcons">
                <BiLogoWindows />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <BiLogoVisualStudio />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <BiLogoSlack />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <SiVercel />
            </Col>
        </Row>
    )
}

export default Techstack