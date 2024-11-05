/* eslint-disable no-unused-vars */
import React from 'react'
import "./text.css";
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"
import Icon4 from "../assets/icon4.png"
const text = () => {
  return (
 <div className="Grid1">
    {/* <h1>Your Ride, Your Way!</h1> */}
    <div className="grid grid-cols-2 gap-4">
  <div>
  <div className="max-w-sm rounded overflow-hidden items-center" id="pitch">
  <img className="" src={Icon1}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">10 mins</div>
    <p className="text-gray-700 text-base">
    Whether you need a quick ride
    </p>
  </div>
  
</div>

  </div>
  <div> <div className="max-w-sm rounded overflow-hidden items-center" id="pitch">
  <img className="" src={Icon2}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">$50/hr</div>
    <p className="text-gray-700 text-base">
It is cheap and affordable
    </p>
  </div>
  
</div></div>


  <div>
  <div className="max-w-sm rounded overflow-hidden items-center" id="pitch">
  <img className="" src={Icon3}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">1-6 People</div>
    <p className="text-gray-700 text-base">
Less people and comfort
    </p>
  </div>
  
</div>
  </div>


  <div> <div className="max-w-sm rounded overflow-hidden items-center" id="pitch">
  <img className="" src={Icon4}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Safety</div>
    <p className="text-gray-700 text-base">
Keeping customers safe til the end
    </p>
  </div>
  
</div></div>
</div>

 </div>
  )
}

export default text
