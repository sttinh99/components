import React from 'react';
import logoCodersX from '../logoCodersX.png';
import './LoginForm.css'
function LoginForm(){
    return(
        <div className="block-login">
            <h1>Sign In</h1>
            <div className="box">
                <div className='user-name'>
                    <label for="user">Username</label>
                    <input className='form-control' id='user' placeholder='TruongQuangTinh'></input>
                </div>
                <div className='password'>
                    <label for="pass">Password</label>
                    <input className='form-control' id='pass' placeholder='*******' type='password' ></input>
                </div>
                <button className='btn btn-success'>Signip to Coders-x</button>
                <div className='keep'>
                    <input type='checkbox'/> Keep me signed in
                </div>
                <div className='forget'>
                    <a href="">Forgot username?</a>
                    <a href="">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;