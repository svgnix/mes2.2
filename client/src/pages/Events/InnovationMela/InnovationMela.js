import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import "./InnovationMela.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const InnovationMela = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        <img src='https://i.ibb.co/MhC5SB8/8-ecell-cutout.png' alt="MES Logo"/>
                    </div>
                    <h1>Innovation Mela</h1>
                    <p>
                    Innovation Mela is the startup fair organised to give all the startups and student projects of MAHE, a platform to showcase their products and other projects that they have been working on. It is like an exhibition of current activities taking place inside the institute where the clubs, student projects and other functioning startups demonstrate their ideas or products to the viewers and motivate them to join the process of making their final products. Innovation Mela also acts as an idea validation medium where the students and staff view the products and give their feedback. It also helps them to promote their organisation and make themselves known to the students who could potentially be recruited.
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
    
    </>
  );
};

export default InnovationMela;