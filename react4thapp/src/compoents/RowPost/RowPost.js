import React, {useEffect, useState} from 'react'
import { imageUrl, API_KEY } from '../../constants/constants'
import "./RowPost.css"
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    // axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      axios.get(props.url).then((response)=>{
        // console.log(response.data);
        setMovie(response.data.results)

      }).catch(error=>{
        // alert('NetWork error')
      })
  },[])

  const opts = {
    height:'390',
    width:'100%',
    playerVars: {
      autoplay:1
    },  
  }

  const handle = (id)=>{
      // console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&laguage=en-US`).then(response=>{
        // console.log(response.data);
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }

     

  
  })}

  

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movie.map((obj)=>

            <img onClick={()=>handle(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
          )}
        </div>
      { urlId &&  <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
