import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';
import { backendUrl } from '../../../../Constants/Constants';

function SignupStep2() {
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState(location.state.email);
    const [password, setPassword] = useState("");

    function Register() {
        axios.post(backendUrl + '/signup', { email: email, password: password }).then((response) => {
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
        <div className="container abc">
            <div className="row pqr">
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <p><small>STEP <b>1</b> OF <b>3</b></small></p>
                    <p><b className='step1Header'>Create a password to start your membership</b></p>
                    <p>Just a few more steps and you're done!<br />We hate paperwork, too.</p>
                </div>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {!email && (<small id="emailHelp" className="form-text text-danger">Email is required.</small>)}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {!password && (<small className="form-text text-danger">Password is required.</small>)}
                        </div>
                    </form>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <button className='btn btn-danger' disabled={!email || !password} onClick={Register}>REGISTER</button>
                </div>
            </div>
        </div>
    );
}

export default SignupStep2