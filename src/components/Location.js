import React from 'react'
import {FaLocationArrow,FaPen , FaSignature } from "react-icons/fa";
import location from '../css/location.css'
import locat from '../img/locat.png'
import warning from '../img/warning.png'
import pen from '../img/pen.png'


const Location = () => {
    return (
        <div className="location">
            <div className="location-one">
                  <div className="location-one-box">
                        <img src={locat} alt="" />
                        <h4 className="location-list2">
                            Noida, India
                        </h4>
                  </div>

                  <div className="location-two-box">
                       <img src={pen} alt="" />
                  </div>
            </div>
            

            <div className="location-data">
                    <img src={warning} alt="" />
                <p className="blog-text"> 
                    Your Location Will Help us Serve Better and Extend a personalised experience
                </p>
            </div>
        </div>
    )
}

export default Location
