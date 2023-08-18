import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {

    return (
       <>
             
       <div className="footer">
            <div className="container">
                <a className="logo" href="/">
                <i className="fa-solid fa-heart fa-flip"></i>
                </a>
                <div className="main-nav">
                    <Link to="/">Home</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100015304218373">
                    <i className="fa-brands fa-facebook-f fa-fade"></i>
                    </a>
                    <a href="https://github.com/Molham-Agha">
                    <i className="fa-brands fa-github fa-fade"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/molham-agha-9932bb281/">
                    <i className="fa-brands fa-linkedin-in fa-fade"></i>
                    </a>
                </div>
            </div>
        </div>
       
       </>
    );
}

export default Footer;
