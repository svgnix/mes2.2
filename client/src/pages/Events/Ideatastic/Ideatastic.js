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
                <img src='https://i.ibb.co/ngqpJMD/Untitled26-20230210192807.png' alt="MES Logo" />
              </div>
              <h1>IDEATTASTIC</h1>

              <p>Participants will be given a random imaginary product and will have to create a pitch based on
                it. The product will be given along with its “working principles” and features. The pitch will have
                to contain:</p>



              <h2>Event Details</h2>
              <br></br>
 
              <div className="guidelines">



                <ul>

                  <li>The Problem it solves</li>
                  <br></br>
                  <li>Market Demographic</li>
                  <br></br>
                  <li>Potential Competitors</li>
                  <br></br>
                  <li>Risks Associated with the product</li>
                  <br></br>
                  <li>Risks Associated with investing</li>
                  <br></br>
                  <li>Plan for what will be done with investment</li>
                  <br></br>
                </ul>
                <p>The ideas will be presented to a panel of judges and will be judges based on criteria of
                  originality, relevance, and applicability</p>

                  <br></br>
                  <h3>Pre-requisites:</h3>

                  <ul>
                    <li>1. Laptop or some device to make pitch</li>
                    <li>
2. Groups to be made with participants on WhatsApp prior to the event (just for basic
introductions and arranging for device): No function for actual event</li>
                  </ul>

                  <br></br>

                  <h3>Event Flow:</h3>

                  <ul>
                    <li>1. Participants will be briefed prior to the event on the WhatsApp group and will be briefed
once again once assembled at the site of the event.
                    </li>
                    <li>
2. Participants will then be allotted an “imaginary product” randomly by drawing lots, some
products may be repeated. (Or do we let them choose?-more fair, but less fun)
                    </li>
                    <li>
3. 45 mins will be allotted to planning and preparation of pitch. (may be increased
depending on number of participants)
                    </li>
                    <li>
4. Presentations will be allotted 5 mins each until the end of the workshop.
                    </li>
                    
                  </ul>






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
        </div>

</>
);
};


// const Ideatastic = () => {
//   return (
//     <>
//       <div className="speaker">
//         {/* <Navbar/> */}
//         <div className="gradient-wrapper">
//           <div className="content-wrapper">
//             <Navbar />
//             <div className="description">
//               <div className="mes-logo">
//                 <img
//                   src="https://i.ibb.co/ngqpJMD/Untitled26-20230210192807.png"
//                   alt="MES Logo"
//                 />
//               </div>
//               <h1>Ideatastic</h1>
//               <p>
//                 Event consist of a basic ideation workshop format, with an additional component. 
//                 <br></br>
//                 Component involves a Networking Session, wherein all the participants are free to interact. 
//               </p>

//               <h2>Guidelines</h2>
//               <ul className="guidelines">
//                 <li>
//                   Round 1: The know-it quiz- a question-and-answer round open to
//                   the people registered.{" "}
//                 </li>
//                 <br></br>
//                 <li>
//                   Registered participants will be added to a WhatsApp group.{" "}
//                 </li>
//                 <br></br>
//                 <li>
//                   The quiz link will be sent to the WhatsApp group 10 minutes
//                   before the quiz time.
//                 </li>
//                 <br></br>
//                 <li>Duration: the quiz can be approximately 20-25 minutes. </li>

//                 <br></br>
//                 <li>
//                   Round 2: This round of Moneyball involves teams of 3 members
//                   each, in which the participants will be given a particular
//                   product or a service. The participating teams are expected to
//                   make a PPT to pitch their respective products or services.
//                   Each team will be given a maximum of 7 minutes in which the
//                   required judging criteria need to be fulfilled. The judges can
//                   cross-question after the pitch is over. The pitch needs to be
//                   completely formal and selling it in a potential market should
//                   be the aim. The judging criteria and point system for the
//                   pitches will be shared in a separate document. The best two
//                   pitches will be selected and they will proceed to the next
//                   round.
//                 </li>
//                 <br></br>
//                 <li>
//                   {" "}
//                   Round 3: The best 2-4 teams that qualify for the second round
//                   will proceed to the third round and in this round, each team
//                   will be provided with a name of a brand, which works under the
//                   same market category. The teams have to prove why their brand
//                   is superior compared to the other brands. These brands
//                   presented by each team will be judged based on
//                   subcategories/judging criteria. Questions can be asked after a
//                   pitching period of 7 minutes maximum. The list of the same
//                   will be provided to the judges during the event. The best
//                   team/ the team with the most points from the three judges will
//                   be declared the winner.
//                 </li>
//               </ul>
//               <br></br>
//               <Link to="/register">
//                 <button>Register Now</button>
//               </Link>
//               <br></br>
//               <br></br>
//               <br></br>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Ideatastic;
