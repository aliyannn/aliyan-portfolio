import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Aliyan-Gohar-Resume-Software-Engineer.pdf"

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, setNavcolor] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavcolor(true);
        } else {
            setNavcolor(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "stickyNav" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span className="text-[var(--light-purple)] font-bold text-3xl">aliyan.</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto flex align-items-center" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <span className="nav-icon-text">
                                    <AiOutlineHome className="nav-icon" /> Home
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                                <span className="nav-icon-text">
                                    <AiOutlineUser className="nav-icon" /> About
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <span className="nav-icon-text">
                                    <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Button variant="navbar" href={resumePDF} className="no-hover-underline" download>
                                Resume
                                <TbArrowUpRight />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
