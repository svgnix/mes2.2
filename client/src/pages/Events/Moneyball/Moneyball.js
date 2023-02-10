import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
//import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const Moneyball = () => {
  return (
    <>
      <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
          <div className="content-wrapper">
            <Navbar />
            <div className="description">
              <div className="mes-logo">
                <img src='https://i.ibb.co/2Wx35Xf/Moneyball-cutout.png' alt="MES Logo" />
              </div>
              <h1>Moneyball</h1>
              <p>
                Have you ever been interested in selling a product which the market presumes is not viable? Moneyball is here to help you utilise your grey cells and your communication skills to progress through the competition which involves showcasing your best skills in the quiz round which will aid you in reaching the second round where you need to prepare a complete formal pitch of the product assigned to you and thereby sell it in the potential market leading you to the final round where you have a battle between the brands!

              </p>

              <h2>Guidelines</h2>
              <ul className="guidelines">
            
                <li>Round 1: The know-it quiz- a question-and-answer round open to the people registered. </li>
                <br></br>
                <li>Registered participants will be added to a WhatsApp group. </li>
                <br></br>
                <li>The quiz link will be sent to the WhatsApp group 10 minutes before the quiz time.</li>
                <br></br>
                <li>Duration: the quiz can be approximately 20-25 minutes. </li>
                
                <br></br>
                <li>Round 2: This round of Moneyball involves teams of 3 members each, in which the participants will be given a particular product or a service. The participating teams are expected to make a PPT to pitch their respective products or services. Each team will be given a maximum of 7 minutes in which the required judging criteria need to be fulfilled. The judges can cross-question after the pitch is over. The pitch needs to be completely formal and selling it in a potential market should be the aim. The judging criteria and point system for the pitches will be shared in a separate document. The best two pitches will be selected and they will proceed to the next round.</li>
                <br></br>
                <li> Round 3: The best 2-4 teams that qualify for the second round will proceed to the third round and in this round, each team will be provided with a name of a brand, which works under the same market category. The teams have to prove why their brand is superior compared to the other brands. These brands presented by each team will be judged based on subcategories/judging criteria. Questions can be asked after a pitching period of 7 minutes maximum. The list of the same will be provided to the judges during the event. The best team/ the team with the most points from the three judges will be declared the winner.</li>
              </ul>
              <br></br>
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

export default Moneyball;