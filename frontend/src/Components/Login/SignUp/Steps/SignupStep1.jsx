import React from 'react';
import "./SignupStep1.css"
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';

function SignupStep1() {
  const location = useLocation();
  const history = useHistory();
  const email = location.state.email;
  const handleNavigation = () => {
    history.push({
      pathname: '/signupstep2',
      state: { email }
    });
  }

  return (
    <div className="container step1Container">
      <div className="row step1Row">
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <p><small>STEP <b>1</b> OF <b>3</b></small></p>
          <p><b className='step1Header'>Finish setting up your account</b></p>
          <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
          <button className='btn btn-danger' onClick={handleNavigation}>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default SignupStep1