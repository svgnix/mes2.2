import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const Workshop = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <h1>Informals</h1>
                    <p>
                    The Entrepreneurship Cell of Manipal Institute of Technology invites you to be a part of an unforgettable series of informal events. On February 11th at 7pm, we will be hosting a spectacular performance of the Blitzkreig dance, followed by the reveal of a talented artist. This evening is sure to leave you captivated and entertained.

In addition to this, we invite you to join us on February 13th at 7pm for a movie night. This will provide a perfect opportunity to unwind, relax, and spend quality time with friends and family.

And we have one more exciting event in store that we will reveal at a later date. Stay tuned to our website and social media pages for further updates.

Join us at the Student Plaza and be a part of creating memories that will last a lifetime. RSVP now and don't miss out on this exciting opportunity!
                    </p>
                    <Link to="/register">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            
            </div>
            
            
      {/* <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>  */}
    </div>
    <Speakers/>
    </>
  );
};

export default Workshop;