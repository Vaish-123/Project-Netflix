import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import './SignIn.css';
import { Assets, backendUrl } from '../../../Constants/Constants';

function SignIn() {

  const location = useLocation();
  const [email, setEmail] = useState((location && location.state && location.state.email) || "");
  const [password, setPassword] = useState();
  const history = useHistory();

  function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    axios.post(backendUrl + '/login', { email: email, password: password }).then(response => {
      if (response.status == 200) {
        alert(response.data.message);
        history.push('/home');
      }
      else alert('API request failed with status code:', response.status);
    }).catch(err => {
      if (err.response) alert(err.response.data.message);
      else alert('An error occurred while processing your request');
    });
  }

  const ResetPassword = () => {
    //redirect to reset password page.
  }

  return (
    <div>
      <img className='logo' src={Assets.NetFlixLogo} alt="Netflix logo here" />
      <div className='signIn'>
        <div className="container signInContainer">
          <div className="content">
            <h1>Sign In</h1>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control inputBox" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control inputBox" id='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            <button type="submit" className="btn signInBtn" disabled={!email || !password} onClick={submit}><b>Sign In</b></button>
            <input type="checkbox" className='rememberMeChk' id='rememberMeChk' /><label htmlFor="rememberMeChk" className='rememberMe'>Remember me?</label>
            <a className='needHelp' onClick={ResetPassword}>Need help?</a>
            <div className="signup">
              New to netflix?
              <a href="" className='signUpNow' onClick={() => history.push('/signup')}>Sign Up Now</a>
              <p className='pageProtect'>This is page is protected by pretty much nothing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn