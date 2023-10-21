import './navbar.css'
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Offcanvas } from "react-bootstrap";
import SideBar from './SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Navbar3() {

  return (
    <nav className='navbar'>
      <img src="images/edge.png" alt='Edge' className='logo'></img>
      <div className="deektopMenu">
        <NavLink to="/" className='desktopMenuListItem'>Home</NavLink >
        <NavLink to="Contact" className='desktopMenuListItem'>Contact Us</NavLink >
        <NavLink to="portfolio" className='desktopMenuListItem'>Projects</NavLink >
        <NavLink to="clients" className='desktopMenuListItem'>Clients</NavLink >
      </div>
      <FontAwesomeIcon icon={faEdit} className='editBtn' />
      <Navbar variant='dark' expand='xs' className='toggleMenu'>
          <Navbar.Toggle />
          <Navbar.Offcanvas className='text-bg-dark hhh1'>
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
             <SideBar/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Navbar>
    </nav>

  );
}

export default Navbar3;