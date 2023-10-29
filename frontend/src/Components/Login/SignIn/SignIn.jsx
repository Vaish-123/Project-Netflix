import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import './SignIn.css';
import { backendUrl } from '../../../Constants/Constants';

function SignIn() {

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
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
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo here" />
      <div className='signIn'>
        <div className="container signInContainer">
          <div className="content">
            <h1>Sign In</h1>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control inputBox" name='email' id='email' onChange={(e) => e.target.value ? setEmail(true) : setEmail(false)} placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control inputBox" name='password' id='password' onChange={(e) => e.target.value ? setPassword(true) : setPassword(false)} placeholder="Password" required />
            </div>
            <button type="submit" className="btn signInBtn" disabled={!email || !password} onClick={submit}><b>Sign In</b></button>
            <input type="checkbox" className='rememberMeChk' id='rememberMeChk' /><label htmlFor="rememberMeChk" className='rememberMe'>Remember me?</label>
            <a className='needHelp' onClick={ResetPassword}>Need help?</a>
            <div className="signup">
              New to netflix?
              <a href="http://localhost:3000/signup" className='signUpNow'>Sign Up Now</a>
              <p className='pageProtect'>This is page is protected by pretty much nothing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn