import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./HomeContent";

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <Header name={"my host apdp"} />
    <div className="App mx-16">
      <HomeContent />
    </div>
    <Footer />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
