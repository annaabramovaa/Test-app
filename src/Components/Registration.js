import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Validation from "./RegistrationValidation";

function Registration() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [values, setValues] = useState({
    fname: "",
    email: "",
    birthday: "",
    radio: "",
  });
  const [errors, setErrors] = useState({});

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div>
      <div className="registration">
        <button onClick={goBack} className="btn-back">
          <KeyboardBackspaceIcon />
        </button>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <h3 id="event-re">Event registration</h3>
            <div className="input-container">
              <label className="labels" htmlFor="fname">
                Full name
              </label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Full name"
                onChange={handleInput}
              />
              {errors.fname && (
                <span className="error-message">{errors.fname}</span>
              )}
            </div>
            <div className="input-container">
              <label className="labels" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="input-container">
              <label className="labels" htmlFor="birthday">
                Date of birth
              </label>
              <br />
              <input
                type="date"
                id="birthday"
                name="birthday"
                placeholder="Enter Date of birth"
                onChange={handleInput}
              />
              {errors.birthday && (
                <span className="error-message">{errors.birthday}</span>
              )}
            </div>
            <p>Where did you hear about this event?</p>
            <div className="radio-container">
              <div>
                <input
                  type="radio"
                  id="social_media"
                  name="source"
                  value="Social_media"
                  checked={selectedOption === "Social_media"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="social_media">Social media</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="friends"
                  name="source"
                  value="Friends"
                  checked={selectedOption === "Friends"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="friends">Friends</label>
              </div>
              <div>
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
              {errors.radio && <p className="error-message">{errors.radio}</p>}
            </div>

            <button id="btn-submit" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
