import React from 'react'
import './Linecateg.css'
import pic1 from '../Assets/pic1.png'
import pic2 from '../Assets/pic2.png'
import pic3 from '../Assets/pic3.png'
import pic4 from '../Assets/pic4.png'
//import line from '../Assets/greenline.png'

const Linecateg = () => {
  return (
    <div className="hero">
        <div className="images">
            <div className="desc">
            <img src={pic1} alt='' height="150px"/>
            <p className="hood">HOODIE</p>
          </div>

          <div className="desc">
            <img src={pic2} alt='' height="150px"/>
            <p className="Sweat">Sweat-shirt</p>
          </div>

          <div className="desc">
            <img src={pic3} alt='' height="150px"/>
            <p className="tshir">T-shirt</p>
          </div>

          <div className="desc">
            <img src={pic4} alt='' height="150px"/>
            <p className="oversiz">Oversized</p>
          </div>
       </div>
    </div>
  )
}

export default Linecateg
