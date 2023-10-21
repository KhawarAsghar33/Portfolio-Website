import React from 'react'
import './ContactUs.css'
function ContactUs() {
    return (
        <>
            <div className='main'>
                <div className='loginBox'>
                    <form>
                        <h2>Contact Us</h2>
                        <div className="inputBox">
                            <input type="text" required />
                            <label>Your Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="textarea" required />
                            <label>Your Message</label>
                        </div>
                        <button className='Btn' type='submit'>Send</button>
                    </form>
                </div>
            </div>

            <div className='mainCard'>
                <div className="card">
                    <img src="./images/email.png" alt="Email" className='contactLogo' />
                    <h5>Email</h5>
                    <p className='cardText'>khawarasghar100@gmail.com</p>
                    <a href='mailto:khawarasghar100@gmail.com' className='cardSend' target='_blank' rel='noreferrer'>Send a message</a>
                </div>
                <div className="card">
                    <img src="./images/linkedin.png" alt="FBLogo" className='contactLogo' />
                    <h5>Linkedin</h5>
                    <p className='cardText'>linkedin.com/in/khawar-asghar-b93934268</p>
                    <a href='https://www.linkedin.com/in/khawar-asghar-b93934268/' className='cardSend' target='_blank' rel='noreferrer'>Send a message</a>
                </div>
                <div className="card">
                    <img src="./images/whatsapp.png" alt="FBLogo" className='contactLogo' />
                    <h5>WhatsApp</h5>
                    <p className='cardText'>+92 3218453791</p>
                    <a href='https://api.whatsapp.com/send?phone=+923218453791' className='cardSend' target='_blank' rel='noreferrer'>Send a message</a>
                </div>
            </div>
        </>
    )
}

export default ContactUs