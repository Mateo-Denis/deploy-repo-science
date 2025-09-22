import React from "react";
import ReactDOM from "react-dom";
import MiCompCiencia from "./MiCompCiencia";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompCiencia />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));