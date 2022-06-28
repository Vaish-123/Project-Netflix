import axios from 'axios';
import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {

  const [bool, setbool] = useState(false);
  const [first, setfirst] = useState(false);

  function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    axios.post('http://localhost:3001/', { email: email, password: password }).then((res) => {
      if (res.data == true) {
        window.location.replace('/home');
      }
      else
        alert(res.data);
    })
  }

  function disableFn(b) {
    if (b == '' || b == null)
      setbool(false);
    else
      setbool(true);
  }

  function disableFn2(b) {
    if (b == '' || b == null)
      setfirst(false);
    else
      setfirst(true);
  }

  return (
    <div>
      <img style={{ width: "150px" }} className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo here" />
      <div className='signIn'>
        <div className="container sc">
          <h1>Sign In</h1>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control ipBox" name='email' id='email' onChange={(e) => disableFn(e.target.value)} placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control ipBox" name='password' id='password' onChange={(e) => disableFn2(e.target.value)} placeholder="Password" required />
          </div>
          <button type="submit" className="btn signInBtn" disabled={!bool || !first} onClick={submit}><b>Sign In</b></button>
        </div>
      </div>
    </div>
  )
}

export default SignIn