import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import Loader from "./components/Loader";
import Footer from "host/Footer";
import Header from "host/Header";
import PDPContent from "./PDPContent";
import SafeComponent from "./SafeComponent";

import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/products/:id" component={PDPContent} />
      </Switch>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("app")
);
