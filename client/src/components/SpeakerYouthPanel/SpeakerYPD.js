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
                <p>Dhruva Goyal</p>
            </div>

            <div className="speaker-details">
                <div className="speaker-img">
                    <img
                        src="https://i.ibb.co/5FJ53pc/image.png"
                        alt="Speaker 1"
                        className="circle-img"
                    />
                </div>
                <p>Anirudh Arun</p>
            </div>

            <div className="speaker-details">
                <div className="speaker-img">
                    <img
                        src="https://i.ibb.co/8bTkbmK/image.png"
                        alt="Speaker 1"
                        className="circle-img"
                    />
                </div>
                <p>Rishab Gupta</p>
            </div>

        </div>


    );
};

export default SpeakersYPD;