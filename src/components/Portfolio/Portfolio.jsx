import React from 'react'
import './Portfolio.css'
import { Button } from 'react-bootstrap'
function Portfolio() {
    return (
        <>
            <h1 className='title1'>Projects</h1>
            <div className='projects'>
                <div className="project">
                    <img src="images/ketflix.png" alt="ketflix" className='img3' />
                    <h5>Ketflix App</h5>
                    <div className='mainBtn'>
                        <a href="https://github.com/KhawarAsghar33/Ketflix" className='gitBtn' target='_blank' rel='noreferrer'><Button variant='info'>Github</Button></a>
                        <a href="https://khawar-asghar-ketflix-app.netlify.app/" className='liveBtn' target='_blank' rel='noreferrer'><Button variant='info'>Live Demo</Button></a>
                    </div>
                </div>
                <div className="project">
                    <img src="images/kr-social.png" alt="ketflix" className='img3' />
                    <h5>Social App</h5>
                    <div className='mainBtn'>
                        <a href="https://github.com/KhawarAsghar33/KR-Social" className='gitBtn' target='_blank' rel='noreferrer'><Button variant='info'>Github</Button></a>
                        <a href="https://kr-social-khawar-mobile-app.netlify.app/" className='liveBtn' target='_blank' rel='noreferrer'><Button variant='info'>Live Demo</Button></a>
                    </div>
                </div>
                <div className="project">
                    <img src="images/resturant.png" alt="ketflix" className='img3' />
                    <h5>Restaurant App</h5>
                    <div className='mainBtn'>
                        <a href="https://github.com/KhawarAsghar33/Restaurant-App" className='gitBtn' target='_blank' rel='noreferrer'><Button variant='info'>Github</Button></a>
                        <a href="https://kr-restaurant-app.netlify.app/" className='liveBtn' target='_blank' rel='noreferrer'><Button variant='info'>Live Demo</Button></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Portfolio