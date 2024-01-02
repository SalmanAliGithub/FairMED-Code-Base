import React from "react";
import logo from '../Assets/logo.png';
import '../Navbar/Header.css';
import {useState} from 'react';




function Header(props){

    const [openModal, setOpenModal] = useState(false)
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
                            <a href="/home" id="style-2">Home</a>
                        </li>
                        <li>
                            <a href="/doctor-rating" id="style-2">Doctor rating</a>
                        </li>
                        <li>
                            <a href="/healthcare-rating" id="style-2">Healthcare rating</a>
                        </li>
                        <li>
                            <a href="/aboutus" id="style-2">About</a>
                        </li>
                        <li>
                            <a href="/contact" id="style-2">Contact</a>
                        </li>
                        </ul>
                    </nav>
                    <div className="registration">
                        <a href="/login" className="signin btn btn-success" onClick={() => {setOpenModal(true);}}>
                        <i className="ri-user-line" />
                        Log In
                        </a>
                        <a href="/signup" className="btn btn-primary" >Signup</a>
                        <a href="#" className="bx bx-menu" id="menu-icon" />
                    </div>
                </div>
                
        </>

    );

    
}

export default Header;

