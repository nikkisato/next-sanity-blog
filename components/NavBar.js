import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
        className="ns-navbar ns-nav-base"
        bg="transparent"
        expand="lg" >
        <Navbar.Brand className="ns-navbar-brand">
        <a href="#">Nikki Sato</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link
            className="ns-navbar-item ns-navbar-link"
            href='/'>Home
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar