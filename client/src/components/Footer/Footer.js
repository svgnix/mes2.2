import React from "react"
import "./Footer.css"

import instagram from "./instagram.svg"
import email from "./email.svg"
import linkedin from "./linkedin.svg"

import ecell from "./../../assets/eCellLight.png"

const Footer = () => {
    return (
        <footer id="contact"> 
            <div className="footer-content">
                <p>Get in touch</p>
                <div className="icons">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ecell.mit/?igshid=xdfcrxt635x1">
                        <img alt="Instagram" src={instagram}></img>
                    </a>
                    <a href="mailto:ecell.mit@manipal.edu">
                        <img alt="Email" src={email}></img>
                    </a>
                    <a href="https://www.linkedin.com/company/ecellmit">
                        <img alt="Linkedin" src={linkedin}></img>
                    </a>
                </div>
                <div className="meta">
                    {/* <p className="conducted">Conducted by</p> */}
                    <a href="/"><img alt="E-Cell" width="100px" src={ecell}></img></a>
                    <h4>The Entrepreneurship Cell, MIT Manipal</h4>
                    <div className="links-nav">
                        <a href="/">Home</a>
                        <p>|</p>
                        <a href="/events">Events</a>
                        <p>|</p>
                        <a href="/register">Register</a>
                        {/* <p>|</p>
                        <a href="/standup">Standup</a> */}
                    </div>
                    <p>Manipal Entrepreneurship Summit 2023</p>
                    <div className="contact-area">
                        <p>Contact</p>
                        <a href="tel:+918447686869">Siddharth</a>
                        <a href="tel:+919006387266">Archit</a>
                        <a href="tel:+918433805182">Raunak</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer