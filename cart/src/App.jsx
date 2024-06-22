import React from "react";
import ReactDOM from "react-dom";
import CartContent from "./components/CartContent";
import "remixicon/fonts/remixicon.css";

import Header from "host/Header";
import Footer from "host/Footer";
import "./index.scss";

const App = () => (
  <>
    <Header />
    <CartContent />
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
