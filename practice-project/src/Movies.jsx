import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'

const Movies = () => {
    let [fetchMovie,setFetchMovie] = useState([])
    async function getMovies (){
        let apis = await axios.get("https://omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1")
        console.log(apis);
        setFetchMovie(apis.data.Search)
        
    }
    useEffect(()=>{
        getMovies()
    },[])

  return (
    <div>
         {fetchMovie.map((ele)=>{
            return <MovieCard key={ele.imdbID} Data={ele}/>
            // return <li key={ele.imdbID}>{ele.Title} </li>
            //         <img src={ele.Poster} alt="" />
         })}
    </div>
  )
}

export default Movies