import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import SmallLogo from "../Logos/SmallLogo";

function MainNav() {
  return (
    <Navbar bg="light" expand="lg" className="bg-white">
      <Container>
        {/* <Navbar.Brand href="/"><SmallLogo /></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/dash/areas">
              <Nav.Link>AREAS</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dash/crops">
              <Nav.Link>CROPS</Nav.Link>
          </LinkContainer>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <LinkContainer to="/portfolio/hotel1">
                <NavDropdown.Item>Hotel1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel2">
                <NavDropdown.Item>Hotel2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/hotel3">
                <NavDropdown.Item>Hotel3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/restaurant2">
                <NavDropdown.Item>Restaurant2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential">
                <NavDropdown.Item>Residential</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential2">
                <NavDropdown.Item>Residential2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential3">
                <NavDropdown.Item>Residential3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential4">
                <NavDropdown.Item>Residential4</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/portfolio/residential5">
                <NavDropdown.Item>Residential5</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;