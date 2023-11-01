import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState();
    const history = useHistory();
    const handleNavigation = () => {
        if (email) history.push({ pathname: '/signupstep1', state: { email } });
    }

    return (
        <div>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo here" />
            <div className="signUp">
                <div className="container signupContainer">
                    <h1 className='signUpHeader'>Unlimited movies, TV shows and more.</h1>
                    <h2 className='mt-2'>Watch anywhere. Cancel anytime.</h2>
                    <div>
                        <h5 className='m-4'>Ready to watch? Enter your email to create or restart your membership.</h5>
                        <div className="d-flex justify-content-center">
                            <input className='signInEmail' type="email" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} />
                            {/* {!email && (<small id="emailHelp" className="form-text text-danger">Th.</small>)} */}
                            <button className='signInBtn' disabled={!email} onClick={handleNavigation} >Get Started
                                <i className="fa-sharp fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp