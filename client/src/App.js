import React, { Component } from "react";
import "./css/App.css";
import "./components/layout/Navbar";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
