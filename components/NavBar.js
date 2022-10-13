import { Navbar, Nav } from 'react-bootstrap';
import Link from "next/link";
import { useTheme } from "providers/ThemeProvider";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Navbar
        className="ns-navbar ns-nav-base"
        bg="transparent"
        expand="lg" >
        <Navbar.Brand className="ns-navbar-brand">
          <Link href="/">
            <a>Nikki Sato</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() =>
              <Link href='/'>
                <a className="ns-navbar-item ns-navbar-link">Home</a>
              </Link>
            }
          />
          <button className="btn btn-success" onClick={toggleTheme}>
            {theme.type}
          </button>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar