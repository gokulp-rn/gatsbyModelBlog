import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby";
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar expand="md" className="mt-4 pl-0">
        <Navbar.Brand href="/" style={{ color: "white", fontFamily:'Roboto Mono', fontWeight:'bold' }}>{siteTitle}</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
                <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li" className="mb-0">
                        <Link to="/" className="nav-link text-light" activeClassName="active" >Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mb-0">
                        <Link to="/collections" className="nav-link text-light" activeClassName="active" >Collection</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header