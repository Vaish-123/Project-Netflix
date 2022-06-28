import React from 'react';
import './Footer.css';

function Footer() {
    
    return (
        <div className='footer'>
            <div className='subFooter'>
                <div className="row frow">
                    <div className='footerMargin'>Questions? Call 123456789</div>
                    <span className='copyright'>&reg;All copyrights reserved to Vaishnav</span>
                    <div className='col-md-3 fm'>
                        <p><a>FAQ</a></p>
                        <p><a>Investor Relations</a></p>
                        <p><a>Privacy</a></p>
                        <p><a href='https://fast.com/'>Speed Test</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a>Help Centre</a></p>
                        <p><a>Jobs</a></p>
                        <p><a>Cookie Preferences</a></p>
                        <p><a>Legal Notices</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a>Account</a></p>
                        <p><a>Ways to watch</a></p>
                        <p><a>Corporate Information</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a>Media centre</a></p>
                        <p><a>Terms of use</a></p>
                        <p><a>Contact us</a></p>
                    </div>
                    <span className='TMDBcopyright'>&#169;This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer