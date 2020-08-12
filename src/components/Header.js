import React from 'react';
import logoCodersX from '../logoCodersX.png';
import './Header.css'
function Header(){
    return(
        <div className="header">
            <div className="block">
                <a className="back">Go back</a>
                <img className="logo" src={logoCodersX}/>
                <button className="sign-up">SignUp</button>
            </div>
        </div>
    );
}
export default Header;