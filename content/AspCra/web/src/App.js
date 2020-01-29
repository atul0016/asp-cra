import React from "react";
import logo from "./react-logo.svg";
import netCoreLogo from "./asp-net-core-logo.png";
import "./App.css";

function App() {
  const [data, setData] = React.useState("loading");
  React.useEffect(() => {
    if (window.location.port !== "4000" && window.location.port !== "5000") {
      setData(
        "Pls close this window and open http://localhost:4000 (after running 'dotnet run')"
      );
    } else {
      fetch("/api/hello-world")
        .then(v => v.text())
        .then(text => setData("server response: " + text));
    }
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
