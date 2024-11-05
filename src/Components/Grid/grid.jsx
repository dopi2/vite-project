/* eslint-disable no-unused-vars */
import React from 'react'
import "./grid.css"
import phone from "../assets/phone.png"
import Sig from "../assets/sig.png"
const grid = () => {
  return (
    <div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 fleet">
  <div id='halo'> 
    <p>We are available 24h / 7</p>
    <h2><img src={phone}/>+61 (0) 383 766 284</h2>
  </div>
  <div id="fleet1">
    <img src={Sig}/>
  </div>
</div>
    </div>
  )
}

export default grid
