import "./App.css";
import { LoginPage } from "./Components/Login";
import  HomePage  from "./Components/HomePage";
import { SignupPage } from "./Components/SignupPage";
import EventForm  from "./Components/EventForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/EventForm" element={<EventForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
