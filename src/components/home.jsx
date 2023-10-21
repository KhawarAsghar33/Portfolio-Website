import React from 'react'
import './home.css'
import Skills from './Skills/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Progress from './Progress/Progress';

function home() {
  return (
    <>
      <div className='intro'>
        <div className="contentIntro">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Khawar</span> <br /> Web Developer</span>
          <p className='introPara'>I'm a skilled and passionate web developer with experience in creating<br /> visually appealing and user friendly websites.</p>
          <button className='introBtn'><FontAwesomeIcon icon={faBriefcase} className='hireIcon' /><span className='hire'>Hire me</span></button>
        </div>
        <img src="images/khawar.png" alt='profile' className='profilePic'></img>
      </div>
      <Skills />
      <Progress/>
    </>
  )
}

export default home;