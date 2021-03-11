import React, { Component } from "react";
import Header from "./components/Header/Header";
import HourBlock from "./components/HourBlock/HourBlock";

import hours from "./hours.json";

import './App.css';

class App extends Component {

  // state = {
  //   hour
  // };

  // handleSaveTask(props) {

  // };

  handleFormSubmit(props){
    let taskEntry = document.getElementById(props.id).task;
    localStorage.setItem(props.id, taskEntry);
  };

  render() {
    return (
      <div>
        <Header />
        {hours.map(hour => (
        <HourBlock 
        saveTask={this.handleSaveTask}
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
