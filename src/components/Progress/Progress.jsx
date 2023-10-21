import React from 'react'
import './Progress.css'
import { ProgressBar } from 'react-bootstrap'
function Progress() {
    return (
        <>
            <div className="progressBar">
                <div className="p10">
                    <h6>HTML</h6>
                    <ProgressBar now={90} label={90+'%'} className='bar10' />
                </div>
                <div className="p10">
                    <h6>CSS</h6>
                    <ProgressBar now={60} label={60+'%'}  className='bar10' />
                </div>
                <div className="p10">
                    <h6>Bootstrap</h6>
                    <ProgressBar now={85} label={85+'%'}  className='bar10' />
                </div>
                <div className="p10">
                    <h6>JavaScript</h6>
                    <ProgressBar now={60} label={60+'%'}  className='bar10' />
                </div>
                <div className="p10">
                    <h6>React Js</h6>
                    <ProgressBar now={70} label={70+'%'}  className='bar10' />
                </div>
                <div className="p10">
                    <h6>Node Js</h6>
                    <ProgressBar now={60} label={60+'%'} className='bar10' />
                </div>
                <div className="p10">
                    <h6>Express Js</h6>
                    <ProgressBar now={60} label={60+'%'} className='bar10' />
                </div>
                <div className="p10">
                    <h6>MongoDB</h6>
                    <ProgressBar now={60} label={60+'%'} className='bar10' />
                </div>
                <div className="p10">
                    <h6>GitHub</h6>
                    <ProgressBar now={80} label={80+'%'} className='bar10' />
                </div>
            </div>
        </>
    )
}

export default Progress