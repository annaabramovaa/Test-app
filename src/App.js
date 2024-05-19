import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Events from "./Components/Events";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderWrapper />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

function HeaderWrapper() {
  const location = useLocation();
  const isRegistrationPage = location.pathname === "/registration";
  return !isRegistrationPage && <Header />;
}

export default App;
