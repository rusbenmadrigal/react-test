import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Russ from "./components/russ";
import Props from "./components/Props";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React JS 2023 y Russ
          </a>
        </section>
        <section>
          <Russ msg="Hello I'm a props component" />
          <hr />
          <Props
            cadena="this is a text string"
            number={19}
            bolean={true}
            fixing={[1, 2, 3]}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
