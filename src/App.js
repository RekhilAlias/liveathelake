import React from "react";
import "./Assets/App.scss";
import Home from "./Components/Home";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="appcomponent">
       <Helmet>
        <meta
          name="description"
          content="Register your attendance to Live @ The Lake for a chance to win an overnight stay at Radisson RED hotel Dubai Silicon Oasis."
        />
        <title>Liveathelake</title>
        <link
          rel="canonical"
          href="https://liveathelake.com/"
        />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
