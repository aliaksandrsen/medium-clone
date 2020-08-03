import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./pages/Routes";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
