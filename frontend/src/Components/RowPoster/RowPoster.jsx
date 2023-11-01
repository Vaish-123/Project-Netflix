import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import { imageUrl, API_KEY } from '../../Constants/Constants';
import './RowPoster.css';
import YouTube from 'react-youtube';

function RowPoster(props) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState();

    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results);
        });
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    const playMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length > 0) setUrlId(response.data.results[2]);
            else alert('Video unavailable');
        });
    }

    return (
        <div className='row rowPoster' >
            <h1 className='title'>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) =>
                    <img key={obj.id} onClick={() => playMovie(obj.id)} src={`${imageUrl + obj.backdrop_path}`} alt="Poster goes here" className={props.small ? 'imgSmall' : 'imgLarge'} />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div >
    );
}

export default RowPoster
