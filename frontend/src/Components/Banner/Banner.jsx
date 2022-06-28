import axios from '../../Axios';
import { imageUrl } from '../../Constants/Constants';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import { action } from '../../urls';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(action).then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * 20)])
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
