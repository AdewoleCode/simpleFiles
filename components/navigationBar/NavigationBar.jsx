'use client'
import React from 'react'
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import "./NavigationBar.css"
import { useRef } from 'react';


const NavigationBar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div className="nav_container">

            <header>
                <a className='title' href="/">
                    <h1>SimpleFiles</h1>
                </a>

                <nav ref={navRef}>
                    <a className="anchor" to="/about">Upload File</a>
                    <a className="anchor" to="/HowItWorks">About Us</a>

                    {/* mobile close btn */}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        <FaTimes />
                    </button>
                    {/* mobile close btn */}
                </nav>

                {/* user account */}
                <a to="/contact">
                    <div className="user-box" >
                        <h4>Get Started</h4>
                    </div>
                </a>
                {/* user account */}


                <button className="nav-btn"
                    onClick={showNavbar}
                >
                    <FaBars />
                </button>

            </header>

        </div>
    )
}

export default NavigationBar