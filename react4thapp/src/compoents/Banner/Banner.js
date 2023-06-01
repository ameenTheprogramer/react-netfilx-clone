import React, { useEffect } from 'react'
import axios from '../../axios'
import './Banner.css'
import { API_KEY } from '../../Constants/Constants'

function Banner() {
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data);
    })

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
