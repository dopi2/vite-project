/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../Navbar/navbar"
import Img1 from "../assets/taxi2-slider-pic1.png"
import Img2 from "../assets/car.png"
import Text from "../Text/text";
import Grid from "../Grid/grid"
import Trust from '../Trusted/Trust';
import Bot from "../Botw/bot"
import Footer from "../Footer/footer"
import "./home.css"
const home = () => {
  return (
 <div id='Fitting'>
    <Navbar/>
      <div id='half'>
      <div className='grid grid-cols-2 gap-4 container'>
        <div id="parent2">
          <Text/>
          <Grid/>
        </div>
  <div id="parent">
   <div>
   <img src={Img1} className="Firstimg" />
   </div>
    <div className="Secondimg">
    <img src={Img2} />
    </div>
  </div>
    </div>
<div id='frot'>
<Trust/>
</div>
    <Bot/>
    <Footer/>
      </div>
 </div>
  )
}

export default home
