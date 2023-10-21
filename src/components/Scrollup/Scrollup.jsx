import React, { useState, useEffect } from 'react'
import './Scrollup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Scrollup() {

    const scrollTop1 = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }
  
    const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };


    return (

        <>
            {
                isVisible
                &&
                <div id="main12">
                    <div className='scrollup' onClick={scrollTop1}>
                        <FontAwesomeIcon icon={faArrowUp} className="icon" />
                    </div>
                </div>
            }
        </>
    )
}

export default Scrollup