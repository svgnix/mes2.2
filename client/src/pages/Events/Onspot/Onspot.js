import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import "./Onspot.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const Onspot = () => {
  return (
    <>
      <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
          <div className="content-wrapper">
            <Navbar />
            <div className="description">
              <div className="mes-logo">
                <img src='https://i.ibb.co/vkFxdts/Logo-Final.png' alt="MES Logo" />
              </div>
              <h1>On the Spot</h1>
              <p>
                

              </p>

              <h2>Event Details</h2>

            <div className="guidelines">
              

              <p>Participants will be given a random imaginary product and will have to create a pitch based on
it. The product will be given along with its “working principles” and features. The pitch will have
to contain:</p>
                <ul>

                    <li>1. The Problem it solves</li>
                    <li>2. Market Demographic</li>
                    <li>3. Potential Competitors</li>
                    <li>4. Risks Associated with the product</li>
                    <li>5. Risks Associated with investing</li>
                    <li>6. Plan for what will be done with investment</li>
                </ul>
                <p>The ideas will be presented to a panel of judges and will be judges based on criteria of
originality, relevance, and applicability</p>


              {/* <ul className="guidelines">
                <li>Each team is given a sheet of clues that represent to various places inside the MIT, a virtual wallet along with which they are given a map of MIT mentioning the restricted places to refer to before the start of the event. The clue list will be rolled out in phases after every round with duration of rounds increasing every successive round.</li>
                <br></br>
                <li>With the start of the game, each team runs to find the places and with every place that they find, they get an acknowledgment from one of the hidden team members placed there.</li>
                <br></br>
                <li>After every round, each team needs to arrive back to the starting point where a bidding round will be held to sale the places.</li>
                <br></br>
                <li> Any team that crosses the sold place after it has been sold will get a rent deduction from there wallet.</li>
                <br></br>
                <li>  In the end, the team with the highest asset will win.</li>
              </ul> */}
              </div>
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

export default Onspot;