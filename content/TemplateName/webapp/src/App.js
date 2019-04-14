import React, { Component } from "react";
import logo from "./react-logo.svg";
import netCoreLogo from "./asp-net-core-logo.png";
import "./App.css";

function App() {
  const [data, setData] = React.useState("loading");
  React.useEffect(() => {
    fetch("/api/hello-world")
      .then(v => v.text())
      .then(text => setData(text));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="plus">+</div>
        <img src={netCoreLogo} style={{ height: "30vmin" }} alt="logo" />
        {data}
      </header>
    </div>
  );
}

export default App;