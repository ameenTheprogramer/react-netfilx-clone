import React, { useEffect } from 'react'
// import { Axios } from "./constants/axios";
import axios from '../../axios'
import "./Banner.css"

function Banner() {
  useEffect(()=>{

  },[])

  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="bannerbuttons">
                <button className='button'>play </button>
                <button className='button'>My list</button>
            </div>
            <h1 className="discription">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>

        </div>
        <div className="fadebottom">

        </div>
      
    </div>
  )
}

export default Banner
