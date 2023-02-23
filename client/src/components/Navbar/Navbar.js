import React from "react";
import "./Navbar.css";
import ecell from "./../../assets/eCellLight.png";
import mahe from "./../../assets/maheLogo.png";

const Navbar = () => {
    const mobileNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const closeNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    return (
        <nav class="navbar">
            <div class="nav-logo">
               <a href="/"> <img src={ecell} alt="Entrepreneurship Cell, MIT"></img></a>
                <a href="/"><img src={mahe} alt="MAHE"></img></a>
            </div>
            <ul class="nav-menu">
                
                 <li class="nav-item" onClick={closeNav}>
                    <a href="/" class="nav-link">Home</a>
                </li>

                <li class="nav-item" onClick={closeNav}>
                    <a href="/events" class="nav-link">Events</a>
                </li>

                <li class="nav-item" onClick={closeNav}>
                    <a href="/register" class="nav-link">Register</a>
                </li>
                
                <li class="nav-item" onClick={closeNav}>
                    <a href="/standup" class="nav-link">Standup</a>
                </li> 
                
                {/* <li class="nav-item" onClick={closeNav}>
                    <a href="/guidelines" class="nav-link">Sponsors</a>
                </li> */}
                {/* <li class="nav-item" onClick={closeNav}>
                    <a href="/team" class="nav-link">Team</a>
                </li> */}
            </ul>
            <div class="hamburger" onClick={mobileNav}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    )
}

export default Navbar;