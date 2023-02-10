import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import "./MoneyQuest.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const MoneyQuest = () => {
  return (
    <>
      <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
          <div className="content-wrapper">
            <Navbar />
            <div className="description">
              <div className="mes-logo">
                <img src='https://i.ibb.co/j485308/Picture-2.png' alt="MES Logo" />
              </div>
              <h1>Money Quest</h1>
              <p>
                Money Quest is a replica of the famous board game, MONOPOLY,  but with a twist. It is an offline game of MONOPOLY mixed with a game of treasure hunt around the campus. The students participate in teams of 2-4 and run around the campus trying to crack the clues given by us. All the teams would be assigned 1 associate who will be with the team all the time to verify the actions of the team members. Each team has to physically visit the places and get a token as a proof. Each round lasts for 45 minutes and after every round, all the teams have to visit the starting point where the bidding of the places that the team has been to takes place that means if a team figured out what the clue was and went to the place and got a token, they can bid for that place and the highest bidder is sold the place. If a team has no tokens, they cannot take part in the bidding round and will have to play in the next round.

                So in the next round, the teams that have bought a property, get paid rent by all the other teams who pass by their property. All these rental transactions happen without the knowledge of the team members and are handled by the respective associate. The team members can question the associate about their balance and other things at any time.
                At the end of the final round, when all the properties have been sold, the team with the highest asset value, WINS.

              </p>

              <h2>Guidelines</h2>

              <ul className="guidelines">
                <li>Each team is given a sheet of clues that represent to various places inside the MIT, a virtual wallet along with which they are given a map of MIT mentioning the restricted places to refer to before the start of the event. The clue list will be rolled out in phases after every round with duration of rounds increasing every successive round.</li>
                <br></br>
                <li>With the start of the game, each team runs to find the places and with every place that they find, they get an acknowledgment from one of the hidden team members placed there.</li>
                <br></br>
                <li>After every round, each team needs to arrive back to the starting point where a bidding round will be held to sale the places.</li>
                <br></br>
                <li> Any team that crosses the sold place after it has been sold will get a rent deduction from there wallet.</li>
                <br></br>
                <li>  In the end, the team with the highest asset will win.</li>
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

export default MoneyQuest;