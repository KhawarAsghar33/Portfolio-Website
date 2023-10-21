import React from 'react'
import './Clients.css';

function Clients() {
    return (
        <>
            <div className='title'>
                <h1>My Clients</h1>
                <p>I have had opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include</p>
            </div>
            <div className='companiesImg'>
                <div><img src="./images/company1.png" alt="company1" className='companyImg' /></div>
                <div><img src="./images/company2.png" alt="company2" className='companyImg' /></div>
                <div><img src="./images/company3.png" alt="company3" className='companyImg' /></div>
                <div><img src="./images/company4.png" alt="company3" className='companyImg' /></div>
            </div>
        </>
    )
}

export default Clients