import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Routes />
      <button onClick={() => history.push("/dashboard")}>iirr</button>
      <button onClick={() => history.push("/")}>voltar</button>
    </div>
  );
}

export default App;
