import React from "react";
import logo from '../Assets/logo.png';
import '../Navbar/Header.css';



function Header(props){

  
    return (
        <>
               <div className="navbar-header">
                <a href="/home" className="logo">
                        <img className="navlogo" src={logo}></img>
                        <span>FairMed</span>
                    </a>
                    <nav className="header-nav">
                        <ul className="navbar" type="none">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/drrating">Doctor rating</a>
                        </li>
                        <li>
                            <a href="/hrrating">Healthcare rating</a>
                        </li>
                        <li>
                            <a href="/aboutus">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        </ul>
                    </nav>
                    <div className="registration">
                        <a href="/login" className="signin">
                        <i className="ri-user-line" />
                        Sign In
                        </a>
                        <a href="/register">Signup</a>
                        <a href="#" className="bx bx-menu" id="menu-icon" />
                    </div>
                </div>
        </>

    );

    
}

export default Header;

