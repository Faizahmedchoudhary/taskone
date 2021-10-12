import React from 'react'
import slider from '../css/slider.css'
import leftarrow from '../img/leftarrow.png'


const Slider = ({onAdd}) => {
    return (
        <div className="slider">
            {/* slider mobile section  */}
            <div className="mobile-section-slider">
                <img src={leftarrow} alt="" />
                <button onClick={onAdd} className="mob-sli-btn">Join Group</button>

            </div>
            <div className="slider-content">

                <h3>Computer Engineering</h3>
                <p>142,765 Computer Engineer Follow This</p>
            </div>
        </div>
    )
}

export default Slider
