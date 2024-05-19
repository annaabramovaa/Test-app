import React from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Registration() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="registration">
        <button onClick={goBack} className="btn-back">
          <KeyboardBackspaceIcon />
        </button>
        <div>
          <form>
            <div>
              <label htmlFor="name">Full name</label>
              <br />
              <input type="text" id="name" placeholder="Enter Full name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" placeholder="Enter Email" />
            </div>
            <div>
              <label htmlFor="birthday">Date of birth</label>
              <br />
              <input
                type="date"
                id="birthday"
                placeholder="Enter Date of birth"
              />
            </div>
            <p>Where did you hear about this event?</p>
            <div>
              <input type="radio" id="radio" value="Social_media" />
              <label htmlFor="radio">Social media</label>
              <input type="radio" id="radio" value="Friends" />
              <label htmlFor="radio">Friends</label>
              <input type="radio" id="radio" value="Found_myself" />
              <label htmlFor="radio">Found myself</label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
