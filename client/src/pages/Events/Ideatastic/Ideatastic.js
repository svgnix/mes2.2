import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
//import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";

const Ideatastic = () => {
  return (
    <>
      <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
          <div className="content-wrapper">
            <Navbar />
            <div className="description">
              <div className="mes-logo">
                <img
                  src="https://i.ibb.co/ngqpJMD/Untitled26-20230210192807.png"
                  alt="MES Logo"
                />
              </div>
              <h1>Ideatastic</h1>
              <p>
                Event consist of a basic ideation workshop format, with an additional component. 
                <br></br>
                Component involves a Networking Session, wherein all the participants are free to interact. 
              </p>

              <h2>Guidelines</h2>
              <ul className="guidelines">
                <li>
                  Round 1: The know-it quiz- a question-and-answer round open to
                  the people registered.{" "}
                </li>
                <br></br>
                <li>
                  Registered participants will be added to a WhatsApp group.{" "}
                </li>
                <br></br>
                <li>
                  The quiz link will be sent to the WhatsApp group 10 minutes
                  before the quiz time.
                </li>
                <br></br>
                <li>Duration: the quiz can be approximately 20-25 minutes. </li>

                <br></br>
                <li>
                  Round 2: This round of Moneyball involves teams of 3 members
                  each, in which the participants will be given a particular
                  product or a service. The participating teams are expected to
                  make a PPT to pitch their respective products or services.
                  Each team will be given a maximum of 7 minutes in which the
                  required judging criteria need to be fulfilled. The judges can
                  cross-question after the pitch is over. The pitch needs to be
                  completely formal and selling it in a potential market should
                  be the aim. The judging criteria and point system for the
                  pitches will be shared in a separate document. The best two
                  pitches will be selected and they will proceed to the next
                  round.
                </li>
                <br></br>
                <li>
                  {" "}
                  Round 3: The best 2-4 teams that qualify for the second round
                  will proceed to the third round and in this round, each team
                  will be provided with a name of a brand, which works under the
                  same market category. The teams have to prove why their brand
                  is superior compared to the other brands. These brands
                  presented by each team will be judged based on
                  subcategories/judging criteria. Questions can be asked after a
                  pitching period of 7 minutes maximum. The list of the same
                  will be provided to the judges during the event. The best
                  team/ the team with the most points from the three judges will
                  be declared the winner.
                </li>
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

export default Ideatastic;
