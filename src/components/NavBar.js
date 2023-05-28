import { Container,Navbar, Nav } from 'react-bootstrap';
import css from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from "axios";
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const {expanded, setExpanded, ref} = useClickOutsideToggle();
    
    const handleSignOut = async () => {
        try{
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch(err) {
            console.log(err);
        }
    }

    const addPostLink = (
        <NavLink to='/posts/create' className={css.NavLink} activeClassName={css.Active} >Add Post</NavLink>
    )
    const logedInLinks = <> 
        <NavLink to='/feed' className={css.NavLink} activeClassName={css.Active} >Feed</NavLink>
        <NavLink to='/liked' className={css.NavLink} activeClassName={css.Active} >Liked</NavLink>
        <NavLink to='/' className={css.NavLink} onClick={handleSignOut} >Logout</NavLink>

        <NavLink 
            to={`/profiles/${currentUser?.profile_id}`} 
            className={css.NavLink} 
        >
            <Avatar src={currentUser?.profile_image} height={40} text='Profile'/>
        </NavLink>
    </>
    const logedOutLinks = <>
        <NavLink to='/register' className={css.NavLink} activeClassName={css.Active} >Register</NavLink>
        <NavLink to='/login' className={css.NavLink} activeClassName={css.Active}  >Login</NavLink>
    </>
  return (    
    <Navbar expanded={expanded} bg="light" expand="lg" fixed='top'className={css.NavBar}>
        <Container>
            <NavLink to='/'>
                <Navbar.Brand >
                    <h2 >Market <span>Place</span></h2>
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostLink}
            <Navbar.Toggle onClick={()=> setExpanded(!expanded)} ref={ref} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto text-left">
                    <NavLink exact to='/' className={css.NavLink} activeClassName={css.Active}>Home</NavLink>
                    {currentUser ? logedInLinks : logedOutLinks}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar