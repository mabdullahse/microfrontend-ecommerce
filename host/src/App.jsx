import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./HomeContent";

import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/product/:id" component={PDPContent} />
          <Route path="/cart" component={CartContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
