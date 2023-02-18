import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";
import "./Iste.css";
import SpeakerWS from "../../../components/SpeakerWorkshop/SpeakerWS";
import SpeakerISTE from "../../../components/SpeakerISTE/SpeakerISTE";


const Iste = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                <img src='https://i.ibb.co/JxJQ7Pw/iste-logo-meh-Asset-1.png' alt="MES Logo"/>
                    </div>
                    <h1>ECell x ISTE</h1>
                    <p>
                    Join us for an enlightening and educational experience at our upcoming workshops, where we will be honored to host some of the most prominent and accomplished professionals in the industry. Get ready to be inspired and learn from experts like Vinod Aravindakshan, founder Careerbolt and Arvind Sasikumar, Co-Founder, CTO at Quinn.These industry leaders will share their valuable insights and experiences on various topics related to entrepreneurship and product development. This is a unique opportunity for attendees to gain a wealth of knowledge and make meaningful connections. Don't miss out on this fantastic learning opportunity!
                    </p>
                    <h2>Registration is Live, Click on the Speaker to register</h2>
                    <br></br>
              <br></br>
              <br></br>
                </div>
            </div>
            
            </div>
            
            
            {/* <div className="speaker">
      <div className="speaker-details">
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <p>Lorem Ipsum</p>
      </div>
      <div className="speaker-details">
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <p>Lorem Ipsum</p>
      </div>
      <div className="speaker-details">
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <p>Lorem Ipsum</p>
      </div>
      <div className="speaker-details">
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <p>Lorem Ipsum</p>
      </div>
    </div>   */}
    </div>
    <SpeakerISTE/>
    </>
  );
};

export default Iste;