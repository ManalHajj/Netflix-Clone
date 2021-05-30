import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Banner.css";
import requests from "./Requests";

function Banner() {
    // movie requests, changes whenever u refresh how ? the request give a random nbr btwn 1 and the max nbr and that's the nbr of the movie shown 
    const[movie,setMovie]= useState([]);
    useEffect(()=>{
        // async => promise / wait for the promise result then do whatever we want to do with it
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    // add "..." when the description is too long
    function truncate(string,n){
      return string?.length > n ? string.substr(0,n-1)+'...' : string
    }
    return (<header className="banner" 
    style={{
    backgroundSize:"Cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center",
    }}>
    <div className="banner_contents">
        <h1 className="banner_title"> 
        {movie?.title || movie?.name || movie?.original_name} {/* it could be either the title the name or the original name */}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button"> Play </button>
            <button className="banner_button"> My list </button>
            </div> 
    <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
    </div>
    <div className="banner--fadeBottom"/>
    </header>
    );
}

export default Banner;
