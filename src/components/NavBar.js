import { Container,Navbar, NavDropdown, Nav } from 'react-bootstrap';
import css from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser()
    const logedInLinks = <> {currentUser?.username}
    <NavLink to='/' className={css.NavLink} activeClassName={css.Active} >Dashboard</NavLink>
    </>
    const logedOutLinks = <>
        <NavLink to='/register' className={css.NavLink} activeClassName={css.Active} >Register</NavLink>
        <NavLink to='/login' className={css.NavLink} activeClassName={css.Active}  >Login</NavLink>
    </>
  return (    
    <Navbar bg="light" expand="lg" fixed='top'className={css.NavBar}>
        <Container>
            <NavLink to='/'>
                <Navbar.Brand href="#home">
                    <h2 >Market <span>Place</span></h2>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <NavLink exact to='/' className={css.NavLink} activeClassName={css.Active}>Home</NavLink>
                    {currentUser ? logedInLinks : logedOutLinks}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar