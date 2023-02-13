import React from "react";
import "./CheckboxCard.css"

const CheckboxCard = ({ eventName, eventMode, logo, dateString, changeFunc, handleArray, guest }) => {
    return (
        <div className="checkbox">
	        <label className="checkbox-wrapper">
            <input 
                type="checkbox" 
                className="checkbox-input" 
                onChange={
                        (e) => {
                            console.log("dd")
                            changeFunc(e.target.checked); 
                            handleArray(e.target.checked, eventName)
                        }
                    }
            />
			<span className="checkbox-tile">
                <span className="name-logo" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="checkbox-icon" style={{ display: "flex", gap: "10px" }}>
				    	<img alt={eventName} src={logo}></img>
				        <span style={{ margin: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <span className="checkbox-label" style={{ textAlign: "left" }}>{eventName}</span>
                            <span style={{ color: "black" }}>{eventMode} </span>
                            <span style={{ color: "black" }}>{guest} </span>
                        </span>
                    </span>
                    <span className="checkbox-icon">
                        <p>{dateString}</p>
				    </span>
                </span>                
			</span>
            </label>
        </div>
    )
};

export default CheckboxCard;