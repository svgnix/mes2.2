import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
// import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";
import SpeakersPD from "../../../components/SpeakerPanelDis/SpeakerPD";


const PanelDiscussion = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                    
                <img src="https://i.ibb.co/sjM3qZg/panel-discussion.png" alt="panel-discussion" border="0"></img>
                    </div>
                    <h1>Panel Discussion</h1>
                    <p>
                    A panel discussion is a conversation between a group of experts or industry and thought leaders, so that the audience can learn from their discourse and interaction. The panellists are a group of people or practitioners in the field, who share facts, offer opinions, and respond to questions of the audience either through doubts curated by the moderator or taken from the audience directly. There is always a moderator to keep the momentum going, to facilitate the discussion and manage the interaction from the audience. Each panellist will typically have their own differing opinions from the others on the subject of the matter presented, which makes for a thought-provoking and well-rounded discussion for the audience to learn from and be entertained by.

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
    <SpeakersPD/>
    </>
  );
};

export default PanelDiscussion;