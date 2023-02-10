import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
//import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const CaseMaze = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        {/* <img src='https://i.ibb.co/Yjy3N6b/1.png' alt="MES Logo"/> */}
                        <img src='https://i.ibb.co/DGtSPF7/1-gtj-Ybb-LB3-transformed.png' alt="MES Logo"/>
                    </div>
                    <h1>Case Maze</h1>
                    <p>
                    A case maze is a competition in which students come together to solve a problem statement that is given to them. A case study asks students to make a detailed analysis of a market situation, an organisation, or a particular situation/ problem. The students are then required to use their problem-solving skills to rectify the complications or come up with innovative solutions to the problem statement at hand. Case competitions prepare students by giving them real-life scenarios in which proper time management becomes a crucial factor in the overall success of the team. Students utilise their teamwork, critical thinking, analysing, and organisational skills to deduce a recommendation that they support in a presentation in front of a panel of judges.
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
    
    </>
  );
};

export default CaseMaze;