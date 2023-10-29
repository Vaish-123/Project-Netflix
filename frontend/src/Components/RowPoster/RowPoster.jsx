import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { imageUrl, API_KEY, backendUrl } from '../../Constants/Constants';
import './RowPoster.css';
import YouTube from 'react-youtube';

function RowPoster(props) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState();
    const history = useHistory();

    setInterval(logout, 50000);

    function logout() {
        axios.get(backendUrl + '/logout').then(response => {
            if (response.status == 200) {
                alert(response.data.message);
                history.push('/');
            }
            else alert('API request failed with status code:', response.status);
        }).catch(err => {
            if (err.response) alert(err.response.data.message);
            else alert('An error occurred while processing your request');
        });
    }

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
