import React, { useState } from "react";
import "./Register.css";
import toast from "react-hot-toast";
import mes from "./../../assets/LogoFinal.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CheckboxCard from "../../components/CheckboxCard/CheckboxCard";

import caseLogo from "./../../assets/logos/1.png";
import pitchLogo from "./../../assets/logos/2.png";
import debateLogo from "./../../assets/logos/3.png";
import moneyLogo from "./../../assets/logos/5.png";
import panelLogo from "./../../assets/logos/7.png";
import innovationLogo from "./../../assets/logos/8.jpg";
import talkLogo from "./../../assets/logos/10.png";
import workshopLogo from "./../../assets/logos/12.png";
import bizLogo from "./../../assets/logos/11.png";
import fallLogo from "./../../assets/logos/F.png";
import moneyquestLogo from "./../../assets/logos/Moneyball.png";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {

    const navigate = useNavigate();

    const d2cLink = "https://dare2compete.com/p/case-maze-manipal-entrepreneurship-summit-manipal-academy-of-higher-education-mahe-karnataka-273797";

    // const [workshop, setWorkshop] = useState(false);
    const [moneyQuest, setMoneyQuest] = useState(false);
    const [panel, setPanel] = useState(false);
    const [pitch, setPitch] = useState(false);
    const [startup, setStartup] = useState(false);
    const [debate, setDebate] = useState(false);
    const [keyNote, setKeyNote] = useState(false);
    const [talk, setTalk] = useState(false);
    const [caseMaze, setCaseMaze] = useState(false);
    const [fallout,setFallout]=useState(false)
    const [workshopOne, setWorkOne] = useState(false);
    const [workshopTwo, setWorkTwo] = useState(false);
    const [biz, setBiz] = useState(false);

    let workshopInit = {
        expectations: "",
        questions: ""
    };
    let panelInit = {
        attracted: "",
        expectations: ""
    };
    let pitchingInit = {
        companyName: "",
        compDesc: "",
        teamRep: {
            name: "",
            email: "",
            college: "",
            course: "",
            regNum: "",
            grad: "",
            contact: ""
        },
        teamMembers: "",
        website: "",
        legal: "",
        formed: null,
        revenue: ""
    };
    let startupInit = {
        name: "",
        numDesk: 0,
        category: "",
        describe: "",
        website: "",
        extraServ: ""
    }
    let debateInit = {
        committeePref1: "",
        committeePref2: "",
        // committeePref3: ""
    }
    let moneyInit = {
        numMems: ""
    }
    const [userData, setUserData] = useState({
            name: "",
            college: "",
            yearOfStudy: 1,
            phoneNum: 0,
            email: "",
            learnerId: "",
            regNum: 0,
            regEvents: []
    });
    const [workData, setWork] = useState(workshopInit);
    const [panData, setPan] = useState(panelInit);
    const [pitchingData, setPitching] = useState(pitchingInit);
    const [startData, setStartData] = useState(startupInit);
    const [debateData, setDebateData] = useState(debateInit);
    const [moneyData, setMoneyData] = useState(moneyInit);

    const Workshop = () => {
        return (
            <div className="event-type">
                <h6>Metaverse Webinar Details</h6>
                <div>
                    <label>Expectations</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        value={workData.expectations}
                        onChange={(e) => setWork({ ...workData, expectations: e.target.value })}
                        placeholder="What are your expectations from the workshop?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Questions</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setWork({ ...workData, questions: e.target.value }) }
                        placeholder="Any questions you might have?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const Panel = () => {
        return (
            <div className="event-type">
                <h6>Panel Discussion Details</h6>
                <div>
                    <label>Attraction</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPan({ ...panData, attracted: e.target.value }) }
                        placeholder="What attracted you to this event?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Expectations</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setPan({ ...panData, expectations: e.target.value }) }
                        placeholder="What are your expectations from the event?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const Pitching = () => {
        return (
            <div className="event-type">
                <h6>Pitch Tank Details</h6>
                <div>
                    <label>Company Name</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, companyName: e.target.value }) }
                        placeholder="Company Name"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Company Description</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, compDesc: e.target.value }) }
                        placeholder="What does your company do?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Name</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, name: e.target.value }}) }
                        placeholder="Name"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Email</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="email" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, email: e.target.value }}) }
                        placeholder="Email"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative College</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, college: e.target.value }}) }
                        placeholder="College"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Registration Number</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, regNum: e.target.value }}) }
                        placeholder="Registration Number"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Course</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, course: e.target.value }}) }
                        placeholder="Course"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Year of Graduation</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, grad: e.target.value }}) }
                        placeholder="Year of graduation"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Contact</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, contact: e.target.value }}) }
                        placeholder="Phone number"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Members</label>
                    <textarea 
                        required  
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamMembers: e.target.value}) }
                        placeholder="Names of team members"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, website: e.target.value }) }
                        placeholder="www.example.com"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Company Type</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, legal: e.target.value }) }
                        placeholder="Company Type"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Formed On</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="date" 
                        onChange={ (e) => setPitching({ ...pitchingData, formed: e.target.value }) }
                        placeholder="Formed On"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Revenue</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        onChange={ (e) => setPitching({ ...pitchingData, revenue: e.target.value }) }
                        placeholder="Revenue in INR"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const StartupFair = () => {
        return (
            <div className="event-type">
                <h6>Innovation Mela Details</h6>
                <div>
                    <label>Name of Startup</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, name: e.target.value }) }
                        placeholder="The next Zomato?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Number of people at desk</label>
                    <input 
                        required
                        className="reg-input" 
                        type="number" 
                        onChange={ (e) => setStartData({ ...startData, numDesk: e.target.value }) }
                        placeholder="1-4 people only"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Category</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, category: e.target.value }) }
                        placeholder="Category of startup"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, describe: e.target.value }) }
                        placeholder="Tell us what you do!"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, website: e.target.value }) }
                        placeholder="www.example.com"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Extra services (if any)</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" value={startData.extraServ}
                        onChange={ (e) => setStartData({ ...startData, extraServ: e.target.value }) }
                        placeholder="What do you need from us?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const Debate = () => {
        return (
            <div className="event-type">
                <h6>Agree to Disagree Details</h6>
                <div>
                    <label>Committee Preference One</label>
                    <select 
                        required 
                        className="reg-input-select" 
                        onChange={(e) => setDebateData({ ...debateData, committeePref1: e.target.value })}
                    >
                        <option>Too soon to IPO</option>
                        <option>Sell it Out</option>
                    </select>
                </div>
                <div>
                    <label>Committee Preference Two</label>
                    <select 
                        required 
                        className="reg-input-select" 
                        onChange={(e) => setDebateData({ ...debateData, committeePref2: e.target.value })}
                    >
                        <option>Too soon to IPO</option>
                        <option>Sell it Out</option>
                    </select>
                </div>
            </div>
        )
    }

    const MoneyQuest = () => {
        return (
            <div className="event-type">
                <h6>Money Quest</h6>
                <div>
                    <label>Number of team members</label>
                    <select 
                        required 
                        className="reg-input-select" 
                        type="text" 
                        value={moneyData.numMems}
                        onChange={(e) => setMoneyData({ ...moneyData, numMems: e.target.value })}
                    >
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const CaseMaze = () => {
        return (
            <div className="event-type">
                <h6 style={{ margin: "10px" }}>Case Maze</h6>
                <a className="d2c" href={d2cLink} target="_blank" rel="noreferrer" onClick={(e) => setCaseMaze(true)}>
                    Register on D2C Here
                </a>
            </div>
        )
    }

    const handleRegEventsArray = (checked, eventName) => {
        if(checked) {
            // add event name to registered events list
            let us = userData; 
            us.regEvents.push(eventName); 
            setUserData(us)
        } else {
            // remove event from registered events list
            let us = userData;
            const index = us.regEvents.indexOf(eventName);
            if(index > -1) { 
                us.regEvents.splice(index, 1); 
                setUserData(us)
            }
        }
    }

    const validateForm = (toastId) => {
        // check for empty fields in each state
        let flag = 0;
        Object.values(userData).forEach(val => {
            if(val === "") {
                flag = 1;
            }
        })
        if (flag === 1) {
            toast.error("Please fill in all the fields!", { id: toastId });
            return false;
        }
        if(userData.phoneNum.toString().length !== 10) {
            toast.error("Enter a valid phone number", { id: toastId });
            return false;
        }
        // if(workshop) {
        //     Object.values(workData).forEach(val => {
        //         if(val === "") {
        //             flag = 1;
        //         } 
        //     })
        // }   
        if(panel) {
            Object.values(panData).forEach(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(pitch) {
            Object.values(pitchingData).forEach(val => {
                if(val === "") {
                    flag = 1;
                }
            })
            if(flag === 1)
                return false;
            else {
                if(pitchingData.teamRep.contact.toString().length !== 10) {
                    toast.error("Enter a valid phone number", { id: toastId })
                    return false;
                }
            }
        }
        if(startup) {
            Object.values(startData).forEach(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(debate) {
            Object.values(debateData).forEach(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(moneyQuest) {
            Object.values(moneyData).forEach(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(userData.regEvents.length === 0) {
            toast.error("Please choose at least one event", { id: toastId });
            return false;
        }
        if (flag === 1) {
            toast.error("Please fill in all the fields!", { id: toastId });
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Loading...");
        if(validateForm(toastId)) {
            let user = {
                ...userData,
                moneyQuest: moneyQuest
            } 
            // add the relevant data to the user object
            if(keyNote)
                user.keyNote = keyNote;
            // if(workshop)
            //     user.workshop = workData;
            if(panel)
                user.panel = panData;   
            if(pitch)
                user.pitching = pitchingData;
            if(startup)
                user.startupFair = startData;
            if(debate)
                user.debate = debateData;
            if(moneyQuest)
                user.moneyQuest = moneyData;
            if(talk)
                user.talkSeries = talk;
            if(caseMaze)
                user.caseMaze = caseMaze;
            if(biz)
                user.bizQuiz = biz;
            if(workshopOne)
                user.workshopOne = workshopOne;
            if(workshopTwo)
                user.workshopTwo = workshopTwo;
            console.log(user)
            if(fallout)
                user.fallout=fallout;
            try {
                const res 
                    = await axios.post(
                        "/api/participant/register", 
                        { ...user }
                    );
                if(res.data.success) {
                    toast.success("Successfully registered!", { id: toastId });
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else {
                    toast.error(res.data.msg[0][Object.keys(res.data.msg[0])[0]], { id: toastId });
                }
            } catch (error) {
                toast.error({...error}.response.data.message, { id: toastId });
            }
        }
    }

    return (
        <div className="register-wrapper">
            <Navbar />
            <div className="form-wrapper">
                <div className="events-header">
                    <img src={mes} alt="MES-logo"></img>
                    <h1 className="events-head">MES Registration 2023</h1> 
                </div>
                <form>
                    <div>
                        <label>Name</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="text" 
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            autoComplete="off" 
                            placeholder="Enter your name"
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>College</label>
                        <input required className="reg-input" type="text" onChange={(e) => setUserData({...userData, college: e.target.value})} placeholder="College Name"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Year of study</label>
                        <select
                            required 
                            className="reg-input-select"
                            onChange={(e) => setUserData({...userData, yearOfStudy: e.target.value})}
                        >
                            {
                                [1, 2, 3, 4].map((val, index) => {
                                    return (
                                        <option key={index} value={val}>{val}</option>
                                    )
                                })
                            }
                        </select>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input required className="reg-input" type="number" onChange={(e) => setUserData({...userData, phoneNum: e.target.value})} placeholder="Enter your phone number"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Email ID</label>
                        <input required className="reg-input" type="email" onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="abc@example.com"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Learner ID</label>
                        <input required className="reg-input" type="email" onChange={(e) => setUserData({...userData, learnerId: e.target.value})} placeholder="Your @manipal.edu ID"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Registration Number</label>
                        <input required className="reg-input" type="number" onChange={(e) => setUserData({...userData, regNum: e.target.value})} placeholder="College Registration Number"/>
                        <span className="underline"></span>
                    </div>
                    <h5>CHOOSE EVENTS</h5>
                    <div className="events-choice">
                    <fieldset className="checkbox-group">
                        {/* <CheckboxCard 
                            eventName="Metaverse Webinar" 
                            eventMode="Online" 
                            changeFunc={setWorkshop} 
                            logo={metaLogo}
                            handleArray={handleRegEventsArray} 
                        /> */}
                        <CheckboxCard 
                            eventName="Design Thinking" 
                            eventMode="Workshop" 
                            changeFunc={setWorkOne} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        />

                        <CheckboxCard 
                            eventName="Entrepreneurial Modelling" 
                            eventMode="Workshop" 
                            changeFunc={setWorkOne} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        />
                        <CheckboxCard 
                            eventName="Amplifying Innovation for Growth" 
                            eventMode="Workshop" 
                            changeFunc={setWorkOne} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        />
                        <CheckboxCard 
                            eventName="Start Ups- building a niche" 
                            eventMode="Workshop" 
                            changeFunc={setWorkOne} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        />
                        <CheckboxCard 
                            eventName="Product Management Bootcamp"
                            eventMode="Workshop" 
                            changeFunc={setWorkOne} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        />
                        {/* <CheckboxCard 
                            eventName="Business Networking Workshop" 
                            eventMode="Offline" 
                            changeFunc={setWorkTwo} 
                            logo={workshopLogo}
                            handleArray={handleRegEventsArray}
                        /> */}
                        <CheckboxCard 
                            eventName="Pitch Tank" 
                            eventMode="Offline" 
                            changeFunc={setPitch} 
                            logo={pitchLogo}
                            handleArray={handleRegEventsArray}
                        /> 
                        {/* <CheckboxCard 
                            eventName="Agree to Disagree" 
                            eventMode="Offline" 
                            changeFunc={setDebate}
                            logo={debateLogo} 
                            handleArray={handleRegEventsArray}
                        /> */}
                        <CheckboxCard 
                            eventName="Money Quest" 
                            eventMode="Offline" 
                            changeFunc={setMoneyQuest} 
                            logo={moneyLogo}
                            handleArray={handleRegEventsArray}
                        /> 
                        {/* <CheckboxCard 
                            eventName="Keynote Session" 
                            eventMode="Offline" 
                            changeFunc={setKeyNote} 
                            logo={keynoteLogo}
                            handleArray={handleRegEventsArray}
                        /> */}
                        <CheckboxCard 
                            eventName="Keynote and Youth panel" 
                            eventMode="Offline" 
                            changeFunc={setTalk}
                            logo={talkLogo} 
                            handleArray={handleRegEventsArray}
                        />

                        <CheckboxCard 
                            eventName="Money Ball" 
                            eventMode="Offline" 
                            changeFunc={setTalk}
                            logo={moneyquestLogo} 
                            handleArray={handleRegEventsArray}
                        />
                        {/* <CheckboxCard 
                            eventName="Case Maze" 
                            eventMode="Online" 
                            changeFunc={setCaseMaze} 
                            logo={caseLogo}
                            handleArray={handleRegEventsArray}
                        /> */}
                        {/* <CheckboxCard 
                            eventName="BizQuiz" 
                            eventMode="Online" 
                            changeFunc={setBiz}
                            logo={bizLogo} 
                            handleArray={handleRegEventsArray}
                        /> */}
                        {/* <CheckboxCard 
                            eventName="Innovation Mela" 
                            eventMode="Offline" 
                            changeFunc={setStartup} 
                            logo={innovationLogo}
                            handleArray={handleRegEventsArray} 
                        /> */}
                        <CheckboxCard 
                            eventName="Panel Discussion" 
                            eventMode="Offline" 
                            changeFunc={setPanel}
                            logo={panelLogo} 
                            handleArray={handleRegEventsArray}
                        />
                         <CheckboxCard 
                            eventName="Fall Out" 
                            eventMode="Offline" 
                            changeFunc={workshopOne}
                            logo={fallLogo} 
                            handleArray={handleRegEventsArray}
                        />
                    </fieldset>
                    </div>
                    {/* {workshop ? Workshop() : ""} */}
                    {pitch ? Pitching()  : ""}
                    {debate ? Debate() : ""}
                    {moneyQuest ? MoneyQuest() : ""}
                    {caseMaze ? CaseMaze() : ""}
                    {startup ? StartupFair() : ""}
                    {panel ? Panel()  : ""}
                    
                    <button onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register