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
                        <p><a href='#'>FAQ</a></p>
                        <p><a href='#'>Investor Relations</a></p>
                        <p><a href='#'>Privacy</a></p>
                        <p><a href='https://fast.com/'>Speed Test</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a href='#'>Help Centre</a></p>
                        <p><a href='#'>Jobs</a></p>
                        <p><a href='#'>Cookie Preferences</a></p>
                        <p><a href='#'>Legal Notices</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a href='#'>Account</a></p>
                        <p><a href='#'>Ways to watch</a></p>
                        <p><a href='#'>Corporate Information</a></p>
                    </div>
                    <div className='col-md-3 fm'>
                        <p><a href='#'>Media centre</a></p>
                        <p><a href='#'>Terms of use</a></p>
                        <p><a href='#'>Contact us</a></p>
                    </div>
                    <span className='TMDBcopyright'>&#169;This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer