import React from 'react';
import skullogo from './images/playbassio.png'
import './login.css';
import {loginUrl} from './spotify';

const Login = () => {
  return (
    <div className='login'>
    <img src={skullogo} alt="company logo" />
    {/* Login with spotify button */}
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login