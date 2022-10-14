import { Navbar, Nav } from 'react-bootstrap';
import Link from "next/link";
import ThemeToggle from "components/ThemeToggle"

const NavBar = ({ theme, toggleTheme }) => {
 
  return (
    <Navbar
        variant={theme.type}
        className="ns-navbar ns-nav-base"
        bg="transparent"
        expand="lg" >
        <Navbar.Brand className="ns-navbar-brand">
          <Link href="/">
            <a style={{ color: theme.fontColor }}>Nikki Sato</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <ThemeToggle onChange={toggleTheme} />
          <Nav.Link
            as={() =>
              <Link href='/'>
                <a className="ns-navbar-item ns-navbar-link">Home</a>
              </Link>
            }
          />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar