import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

function Events() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/registration");
  };

  return (
    <div className="events">
      <div className="event-box">
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
        <div className="event-1">
          <h4>Title</h4>
          <p>Description</p>
          <div className="buttons-container">
            <button className="register" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="participants">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
