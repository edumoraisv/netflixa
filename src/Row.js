import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './requests'
import './Row.css'
const baseURL='http://api.themoviedb.org/3'
const imgBaseURL="https://image.tmdb.org/t/p/original"        
//const API_KEY='4c953cd51ef2536eba5994c2da377738'
function Row({title,fetchUrl,isLargeRow}) {
    //console.log(fetchUrl)
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        //axios.get('./data/topTrending.json')
        //axios.get('https://api.themoviedb.org/3/movie/550?api_key=bb91c536c837ba7f19b9d2007a650e3d')
        //axios.get('http://api.themoviedb.org/3/trending/all/week?api_key=4c953cd51ef2536eba5994c2da377738&language=en-us')
        
        axios.get(`${baseURL}${fetchUrl}`)
        .then(response=>{
            //console.log(response)
            setMovies(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [movies])
    //console.table(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie=>
                <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${imgBaseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
                )}
            </div>
        </div>
    )
}

export default Row
