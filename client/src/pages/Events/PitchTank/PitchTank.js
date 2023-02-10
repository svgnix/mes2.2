import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const PitchTank = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                
                  <img src='https://i.ibb.co/rtChQnm/pitch-tank.png' alt="MES Logo"/>
                    </div>
                    <h1>Pitch Tank</h1>
                    <p>
                    Have you ever seen the popular T.V. Show Shark Tank? Pitch tank tries to create a similar platform for students seeking funding for their startups by inviting venture capitalists, angel investors and alumni. This is a closed - door event so as to maintain the confidentiality of the ideas that students are trying to make a business out of. The students pitch their products to the judges(sharks) and explain their vision, business model or their idea to them in order to seek funding from them. The students are put through a line of questioning about their business by the judges.Startups that seem fit or appeal to any judge, are funded by them.
                    </p>
                    <Link to="/register">
                        <button>Register Now</button>
                    </Link>
              <br></br>
              <br></br>
              <br></br>
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
    {/* <Speakers/> */}
    </>
  );
};

export default PitchTank;