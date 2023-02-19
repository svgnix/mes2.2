import React, { useState } from "react";
import "./Standup.css";
import toast from "react-hot-toast";
import calendar from "./calendar.svg";
import map from "./map.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Standup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        regNum: 0,
        college: "MIT"
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Loading...");
        if(userData.name === "" || userData.email === "" || userData.college === "") {
            toast.error("Fields are incomplete", { id: toastId });
        } else if(userData.regNum.toString().length < 7) {
            toast.error("Invalid Registration Number", { id: toastId });
        } else {
            const res 
                = await axios.post(
                    "/api/standup/register", 
                    { ...userData }
                );
            if(res.data.success) {
                toast.success("Registrations Successfully!", { id: toastId });
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                console.log(res)
                toast.error(res.data.message, { id: toastId });
            }
        }
    }
    return (
        <div className="standup-wrapper">
            <div className="standup-header">
                <div className="com-image">
                    <div className="gradient">
                        <div className="head-content">
                            <h3>Rajat Chauhan & Ashish Solanki</h3>
                            <p>
                                A standup performance by Rajat Chauhan and Ashish Solanki, two of India’s leading standup comics. They 
                                have an unique spot in the pantheon of Indian comics, with a knack for observation that is second to none, a signature low-key 
                                style of delivery, and a great command over language. A professional purveyor of shower thoughts, they have entertained audiences 
                                with their takes on everything from Masterchef to Mukesh Ambani, and will be a hilarious highlight for MES 2023.
                            </p>
                            <div className="standup-meta">
                                <div className="date">
                                    <img alt="Calendar" src={calendar}></img>
                                    <p>25th February 2023</p>
                                </div> 
                                <div className="date">
                                    <img alt="Location" src={map}></img>
                                    <p>MIT Quadrangle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="standup-form">
                <form>
                    <div>
                        <label>Name</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Enter your name"
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Email ID</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="email" 
                            autoComplete="off" 
                            placeholder="Enter your email"
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Registration Number</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="number" 
                            autoComplete="off" 
                            placeholder="Enter your registration number"
                            onChange={(e) => setUserData({...userData, regNum: e.target.value})}
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>College</label>
                        <select 
                            required 
                            className="reg-input-select" 
                            type="text" 
                            autoComplete="off" 
                            onChange={(e) => setUserData({...userData, college: e.target.value})}
                        >
                            <option>MIT</option>
                            <option>KMC</option>
                            <option>WGSHA</option>
                            <option>MCOPS</option>
                            <option>TAPMI</option>
                            <option>OTHERS...</option>
                        </select>
                        <span className="underline"></span>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>Register</button>
                </form>
            </div>
        </div>
    );
}
export default Standup;