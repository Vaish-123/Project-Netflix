import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Login/SignIn/SignIn";
import SignUp from "./Components/Login/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import RowPoster from "./Components/RowPoster/RowPoster";
import SignupStep1 from "./Components/Login/SignUp/Steps/SignupStep1";
import SignupStep2 from "./Components/Login/SignUp/Steps/SignupStep2";
import "./App.css";
import "./urls";
import { originals, trending, horror } from "./urls";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Navbar />
          <Banner />
          <RowPoster url={originals} title="NETFLIX ORIGINALS" />
          <RowPoster url={trending} title="Trending" small />
          <RowPoster url={horror} title="Horror" small />
        </Route>
        <Route exact path="/signupstep1">
          <Navbar />
          <SignupStep1 />
        </Route>
        <Route exact path="/signupstep2">
          <Navbar />
          <SignupStep2 />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
