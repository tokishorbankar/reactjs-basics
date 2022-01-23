import React, { Component } from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    const users = [
      { name: "John", hobbies: ["sports"], email: "john@gmail.com" },
      { name: "Deere", hobbies: ["sports", "Games"], email: "deere@gmail.com" },
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home users={users} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
