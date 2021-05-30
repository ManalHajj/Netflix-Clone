import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title,fetchUrl, isLargeRow=false}) {
    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerURL]=useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=> {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    },[fetchUrl]);

 const opts = {
     height:"390",
     width:"100%",
     playerVars:{
     autoplay:1, 
     },
 };
 const handleClick = (movie) =>{
if(trailerUrl){
    setTrailerURL("");
}
else{
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
    .then((url )=> {
        const urlParams = new URLSearchParams (new URL(url).search);
        setTrailerURL(urlParams.get('v')); // to only get the v value part of the url
      
      })
      .catch((error) => console.log(error)); 
}
 };


    return (
    <div className="row">
        <h2> {title} </h2>
       <div className="row_posters">
           
        {movies.map((movie) => (
            <img 
            key={movie.id}
            onClick = {() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
            alt={movie.name}
            /> //for evert single movie we'll retrun an image ( of the film concerned )
        ))}
        </div> 
        {/* when we have the trailer url -> show the ytb video */}
       {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
    );
}

export default Row;