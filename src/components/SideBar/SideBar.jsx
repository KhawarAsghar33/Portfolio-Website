import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
    return (
        <div className='SideBar'>
            <div className='rightbarWrapper'>
                <div className="deektopMenu1">
                    <NavLink to="/" className='side1'>Home</NavLink >
                    <NavLink to="Contact" className='side1'>Contact Us</NavLink >
                    <NavLink to="portfolio" className='side1'>Projects</NavLink >
                    <NavLink to="clients" className='side1'>Clients</NavLink >
                </div>
                <hr />
                <h6 className='side2'>FAQ & Contact</h6>
                <hr />
                <h6 className='side2'>Privacy</h6>
                <hr />
                <h6 className='side2'>Terms</h6>
                <hr />
                <h6 className='side2'>Manage Consent</h6>
                <hr /><br /><br /><br />
                <Container><Button variant="outline-light" size='sm' className='rightbarButton'>Show More</Button></Container>

            </div>
        </div>
    )
}

export default SideBar
