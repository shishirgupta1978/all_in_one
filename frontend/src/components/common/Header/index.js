import React,{useEffect, useRef} from 'react'
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaSignInAlt,FaSignOutAlt } from 'react-icons/fa';
import {GiHouse} from 'react-icons/gi';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {profile, logout,reset } from '../../../api/apiSlice';
import './index.scss';

export const Header=({ setNavHeight })=> {
  const navRef = useRef(null);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user}= useSelector((state)=>state.api)
  const logoutHandler = ()=>{
    dispatch(logout());
    dispatch(reset());
    navigate("/")
  }


 useEffect(() => {
  console.log(user)
    const height = navRef.current.clientHeight;
    setNavHeight(height);
  }, [setNavHeight]);




  return (
      <Navbar fixed="top" ref={navRef} expand="md"  className="navbar">
        <Container>
          <Navbar.Brand  as={NavLink} to="/" className="navbar__brand"> Three in One</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"  className="navbar__toggle" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">

              {user ? (<>                
                <NavDropdown title={<Image src={user.profile} height='35px' width='40px'  roundedCircle />} id="username">
                
                <NavDropdown.Item  as={NavLink} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item  as={NavLink} to="/changepassword">Change Password</NavDropdown.Item>
                  <NavDropdown.Item  onClick={logoutHandler}>
                  <FaSignOutAlt/> Logout</NavDropdown.Item>
                </NavDropdown></>
              ) :(<Nav.Link as={NavLink} className="navbar__link" to="/login"><FaSignInAlt/> Login</Nav.Link>)}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

