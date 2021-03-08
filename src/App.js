import React, { Component } from "react";

import Header from "./components/Header";
import HourBlock from "./components/HourBlock";

import hour from "./hours.json";

import './App.css';

class App extends Component {

  state = {
    hour
  };

render() {
  return (
    <div>
      <Header />
      {this.state.hour.map(hour => (
        <HourBlock 
        id={hour.id}
        key={hour.id}
        hour={hour.hour}
        task={hour.task} />
      ))}
     
    </div>

  );
}
}

export default App;