import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import React, { useEffect, useState } from 'react'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[0]);
            setMovie(response.data.results[1])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className="banner-content">
                <h1 className='banner-heading'>{movie ? movie.original_title : ""}</h1>
                <p>{movie ? movie.overview : ""}</p>
                <div className="banner-buttons">
                    <button className='Btn'>Play</button>
                    <button className='Btn'>My List</button>
                </div>
            </div>
            <div className="fade" />
        </div>
    )
}

export default Banner
