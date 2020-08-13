import React from 'react';
import logoCodersX from '../logoCodersX.png';
import './Header.css'
import LoginForm from './LoginForm'
function Header(){
    return(
        <div className="header">
            <div className="block">
                <a className="back">Go back</a>
                <img className="logo" src={logoCodersX}/>
                <button className="sign-up">SignUp</button>
            </div>
            <LoginForm/>
        </div>
    );
}
export default Header;