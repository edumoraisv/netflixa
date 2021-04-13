import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './requests';
import "./Banner.css"
const baseURL='http://api.themoviedb.org/3'
const imgBaseURL="https://image.tmdb.org/t/p/original"  
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`${baseURL}${requests.fetchNetflixOriginals}`)
        .then(response=>{
            setMovie(
                response.data.results[Math.floor(Math.random()*response.data.results.length-1)]    
            );
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    //console.log(movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <header 
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("${imgBaseURL}${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
            > 
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>

                </div>
            <h1 className="banner_description">
                {/*{movie.overview} */}
                <br/>
                {truncate(movie.overview,150)}
            </h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
