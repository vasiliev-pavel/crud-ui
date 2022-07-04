import React, { Component, useState } from "react";

import Main from "./components/Main";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Data list</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
