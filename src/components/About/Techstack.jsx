import { Row, Col } from "react-bootstrap"
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiNodejs
} from "react-icons/di";

import {
    FaGithub,
    FaGitAlt,
    FaPython,
    FaReact,
    FaWordpress,
    FaShopify,
    FaHtml5,
    FaCss3
} from "react-icons/fa";

function Techstack() {
    return (
        <Row className="justify-center">
            <Col xs={4} md={2} className="techIcons">
                <FaReact />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaPython />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaGithub />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaGitAlt />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaHtml5 />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaCss3 />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaWordpress />
            </Col>
            <Col xs={4} md={2} className="techIcons">
                <FaShopify />
            </Col>
        </Row>
    )
}

export default Techstack