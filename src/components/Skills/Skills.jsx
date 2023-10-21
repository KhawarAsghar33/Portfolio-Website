import React from 'react'
import './Skills.css'

function Gallery() {
    return (
        <>
        <h1 className='title1'>Skills</h1>
        <div className='mainG'>
            <div className="box">
                <span style={{'--i': 1}}><img src="./images/html.png" alt="html" className='img9' /></span>
                <span style={{'--i': 2}}><img src="./images/css1.png" alt="css" className='img9' /></span>
                <span style={{'--i': 3}}><img src="./images/bootstrap.png" alt="bootsyrap"  className='img9' /></span>
                <span style={{'--i': 4}}><img src="./images/js.png" alt="js" className='img9' /></span>
                <span style={{'--i': 5}}><img src="./images/reactjs.png" alt="reactjs" className='img9' /></span>
                <span style={{'--i': 6}}><img src="./images/nodejs.png" alt="nodejs" className='img9' /></span>
                <span style={{'--i': 7}}><img src="./images/expressjs.png" alt="expressjs" className='img9' /></span>
                <span style={{'--i': 8}}><img src="./images/mongodb.png" alt="mongodb"  className='img9' /></span>
                <span style={{'--i': 9}}><img src="./images/github.png" alt="github" className='img9' id='gitHub' /></span>
            </div>
        </div>
        </>
    )
}

export default Gallery