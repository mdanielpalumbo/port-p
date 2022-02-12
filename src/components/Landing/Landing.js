import React from 'react'
import image from '../../images/custom-image.jpeg'

function Landing () {
    return (
        <div className="landing">
            <div className="leftLand">
                    <p>PALUMBO</p>
                    <p>DANIEL</p>
            </div>
            <div className="rightLand">
                <img src={image}/>
            </div>
        </div>
    )
}

export default Landing