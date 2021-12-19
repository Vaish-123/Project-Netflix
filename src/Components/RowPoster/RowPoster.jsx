import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import './RowPoster.css'
function RowPoster(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response => {
            setMovies(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h1 className='title'>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) =>
                        <img src={`${imageUrl+obj.backdrop_path}`} alt="Poster goes here" className={props.small?'imgSmall':'imgLarge'} />
                )}

            </div>
        </div>
    )
}

export default RowPoster
