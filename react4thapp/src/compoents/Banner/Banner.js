import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import { API_KEY, imageUrl } from '../../constants/constants'


function Banner() {
  const [movie,setMovie]= useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data.results[0]);
        let num = Math.floor(Math.random()*21)
        setMovie(response.data.results[num])
    })

  },[])

  return (
    <div
    // style={{backgroundImage:movie? `url(${imageUrl}${movie.backdrop_path})` : ""}}
    style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div className="bannerbuttons">
                <button className='button'>play </button>
                <button className='button'>My list</button>
            </div>
            <h1 className="discription">{movie ? movie.overview : ""}</h1>

        </div>
        <div className="fadebottom">

        </div>
      
    </div>
  )
}

export default Banner
