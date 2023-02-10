import React from "react";
import "./Events.css";
import mes from "./../../assets/LogoFinal.png"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

const EventsPage = () => {
    return (
        <div className="m-container">
            <Navbar />
            <div className="events-header">
                <img src={mes} alt="MES-logo"></img>
                <h1 className="events-head">MES Events 2023</h1> 
                <Link to="/register">
                    <button>Register Now</button>
                </Link>
            </div>
            <Cards />
        </div>

    )
}

export default EventsPage


{/* <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Innovation Mela</h1>
                    <p className="text-large">Students with their own startups can set up a stall and promote their startups and promote their job offerings, if any.</p>
                    <p className="text-large">Innovation Mela is the startup fair organised to give all the startups and student projects of MAHE, a platform to showcase their products and other projects that they have been working on. It is like an exhibition of current activities taking place inside the institute where the clubs, student projects and other functioning startups demonstrate their ideas or products to the viewers and motivate them to join the process of making their final products. Innovation Mela also acts as an idea validation medium where the students and staff view the products and give their feedback. It also helps them to promote their organisation and make themselves known to the students who could potentially be recruited.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Panel Discussion</h1>
                    <p className="text-large">A session by entrepreneurship experts on start-ups. The experts will share their opinions on the entrepreneurial decision-making process.</p>
                    <p className="text-large">A panel discussion is a conversation between a group of experts or industry and thought leaders, so that the audience can learn from their discourse and interaction. The panellists are a group of people or practitioners in the field, who share facts, offer opinions, and respond to questions of the audience either through doubts curated by the moderator or taken from the audience directly. There is always a moderator to keep the momentum going, to facilitate the discussion and manage the interaction from the audience. Each panellist will typically have their own differing opinions from the others on the subject of the matter presented, which makes for a thought-provoking and well-rounded discussion for the audience to learn from and be entertained by.</p>
                </div>
                <div className="article ">
                    <h1 className="card-heading">Pitch Tank</h1>
                     <p className="text-large">A pitching session where top startups from MAHE get a chance to present their pitches and stand a chance to get funded by investors in exchange for equity.</p> 
                    <p className="text-large">Have you ever seen the popular T.V. Show Shark Tank? Pitch tank tries to create a similar platform for students seeking funding for their startups by inviting venture capitalists, angel investors and alumni. This is a closed - door event so as to maintain the confidentiality of the ideas that students are trying to make a business out of. The students pitch their products to the judges(sharks) and explain their vision, business model or their idea to them in order to seek funding from them. The students are put through a line of questioning about their business by the judges.Startups that seem fit or appeal to any judge, are funded by them.</p>
                </div>
              </div>
              <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Talk Series</h1>
                    <p className="text-large">Interact with Industry experts who will share their insights on how to go about building a solid business plan for your startup idea. Learn how to build relationships and communicate with people to excel as an entrepreneur.</p>
                </div>
                <div className="article ">
                    <h1 className="card-heading">Keynote Address</h1>
                    <p className="text-large">With Shark Tank India releasing their first season, people from students of MAHE have started to witness the growth of innovation. Since this is the year of innovation, we have someone that will have you on the edge of your seat.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Stand-Up Comedy</h1>
                    <p className="text-large">A stand-up set performed by a surprise guest, to provide a stressbuster after a series of hectic and serious events.</p>
                </div>
              </div>
              <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Agree to Disagree</h1>
                    <p className="text-large">This event allows participants from students of MAHE to discuss and deliberate on subjects related to the startup world. Contest to experience and win a real life business-related discourse or gain insight about a certain situation from fellow entrepreneurs!</p>
                </div> 
                <div className="article">
                    <h1 className="card-heading">Case Maze</h1>
                    <p className="text-large">A case maze is a competition in which students come together to solve a problem statement that is given to them. A case study asks students to make a detailed analysis of a market situation, an organisation, or a particular situation/ problem. The students are then required to use their problem-solving skills to rectify the complications or come up with innovative solutions to the problem statement at hand. Case competitions prepare students by giving them real-life scenarios in which proper time management becomes a crucial factor in the overall success of the team. Students utilise their teamwork, critical thinking, analysing, and organisational skills to deduce a recommendation that they support in a presentation in front of a panel of judges.</p>
                    <p className="text-large">This will be a case study competition which will help students develop critical thinking in terms of businesses and startups. A detailed case study about 2 startups/companies will be released. Participants will need to analyze them and answer questions based on them.This will take place in 4 challenging rounds.</p> 
                </div>
                <div className="article">
                    <h1 className="card-heading">Money Quest</h1>
                    <p className="text-large">MIT’s version of MONOPOLY wherein the player's goal is to remain financially solvent while forcing opponents into bankruptcy by buying property. Here the MIT campus is the MONOPOLY board, participants are the tokens and various infrastructures as property. The participants have to first guess the name of the place depending on the clues provided and if the participant gets that right he gets the chance to bid for the property among other participants who guessed the place.</p>
                    <p className="text-large">A life-size “MONOPOLY”,  All properties will be auctioned off, and teams will need to find safe notes hidden throughout the campus in order to participate in the auctions.</p> 
                </div>
                <div className="article">
                    <h1 className="card-heading">Workshops</h1>
                    <p className="text-large">It is  an offline event where in a lot of renowned dignitaries would come and enlighten us with all the knowledge they have to offer. We have some amazing people on board and it would be an exciting and enlightening event.</p>
                </div>
              </div>
              <div className="grid">
                
                <div className="article">
                    <h1 className="card-heading">Fallout</h1>
                    <p className="text-large">E-cell's very own moot court designed for aspiring Entrepreneurs, perfect for fast-paced debate, and dotted with legal article throughouts . Here, we will see students embodying lawyers and fighting cases in an action-packed and heated environment guaranteed to leave anyone who attempts to participate STARSTRUCK!
Fallout puts participants into dangerous situations which will have them running their Entrepreneurial problem solving skills to get situations under control , its survival of the fittest and most logical, May the best team WIN!
</p>
                    <p className="text-large">Explore yourself and fathom your depths of interest, to pull out your veiling curiosity in the world of and business. BizQuiz at MES 2022 is designed to pull the inner quiz master out of you!</p> 
                </div>
                <div className="article">
                    <h1 className="card-heading">Money Ball</h1>
                    <p className="text-large">Have you ever been interested in selling a product which the market presumes is not viable? Moneyball is here to help you utilise your grey cells and your communication skills to progress through the competition which involves showcasing your best skills in the quiz round which will aid you in reaching the second round where you need to prepare a complete formal pitch of the product assigned to you and thereby sell it in the potential market leading you to the final round where you have a battle between the brands!</p>
                    <p className="text-large">Let's do some exciting new businesses in the Metaverse! Do you be the next Meta in the Web3 space? Join us for a session on business opportunities in Web3.</p> 
                </div>
              </div> */}