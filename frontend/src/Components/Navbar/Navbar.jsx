import axios from 'axios';
import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { backendUrl } from '../../Constants/Constants';

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
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo here" />
            <img className='avatar mt-4' onClick={logout} src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar here" />
        </div>
    );
}

export default Navbar
