import axios from 'axios';
import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Assets, backendUrl } from '../../Constants/Constants';

function Navbar() {
    const history = useHistory();

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

    return (
        <div className='navbar p-4'>
            <img className='logo' src={Assets.NetFlixLogo} alt="Netflix logo here" />
            <img className='avatar mt-4' onClick={logout} src={Assets.AvatarLogo} alt="Avatar here" />
        </div>
    );
}

export default Navbar
