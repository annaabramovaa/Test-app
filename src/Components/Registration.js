import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Registration() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSelectedOption(selectedOption === value ? "" : value);
  };

  return (
    <div>
      <div className="registration">
        <button onClick={goBack} className="btn-back">
          <KeyboardBackspaceIcon />
        </button>
        <div>
          <form>
            <h3 id="event-re">Event registration</h3>
            <div>
              <label className="labels" htmlFor="name">
                Full name
              </label>
              <br />
              <input type="text" id="name" placeholder="Enter Full name" />
            </div>
            <div>
              <label className="labels" htmlFor="email">
                Email
              </label>
              <br />
              <input type="email" id="email" placeholder="Enter Email" />
            </div>
            <div>
              <label className="labels" htmlFor="birthday">
                Date of birth
              </label>
              <br />
              <input
                type="date"
                id="birthday"
                placeholder="Enter Date of birth"
              />
            </div>
            <p>Where did you hear about this event?</p>
            <div className="radio-container">
              <input
                type="radio"
                id="social_media"
                name="source"
                value="Social_media"
                checked={selectedOption === "Social_media"}
                onChange={handleRadioChange}
              />
              <label htmlFor="social_media">Social media</label>
              <input
                type="radio"
                id="friends"
                name="source"
                value="Friends"
                checked={selectedOption === "Friends"}
                onChange={handleRadioChange}
              />
              <label htmlFor="friends">Friends</label>
              <input
                type="radio"
                id="found_myself"
                name="source"
                value="Found_myself"
                checked={selectedOption === "Found_myself"}
                onChange={handleRadioChange}
              />
              <label htmlFor="found_myself">Found myself</label>
            </div>
            <input id="btn-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
