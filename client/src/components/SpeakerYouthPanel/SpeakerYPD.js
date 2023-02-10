import React from "react";
import "./SpeakerYPD.css";

const SpeakersYPD = () => {
    return (
        <div className="speaker">

            <div className="speaker-details">
                <div className="speaker-img">
                    <img
                        src="https://i.ibb.co/xzqFb5z/image.png"
                        alt="Speaker 1"
                        className="circle-img"
                    />
                </div>
                <a className="linkedin" href="https://www.linkedin.com/in/dhruvagoyal/">Dhruva Goyal</a>
            </div>

            <div className="speaker-details">
                <div className="speaker-img">
                    <img
                        src="https://i.ibb.co/5FJ53pc/image.png"
                        alt="Speaker 1"
                        className="circle-img"
                    />
                </div>
                <a className="linkedin" href="https://www.linkedin.com/in/anirudh-arun-2823b3204/">Anirudh Arun</a>
            </div>

            <div className="speaker-details">
                <div className="speaker-img">
                    <img
                        src="https://i.ibb.co/8bTkbmK/image.png"
                        alt="Speaker 1"
                        className="circle-img"
                    />
                </div>
                <a className="linkedin" href="https://www.linkedin.com/in/rishabh-gupta-8955a85a/">Rishabh Gupta</a>
                
            </div>

        </div>


    );
};

export default SpeakersYPD;