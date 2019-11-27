import React from "react";
import TaskList from "./components/TaskList.js";
import Date from "./components/Date.js";
import Avatar from "./components/Avatar.js";
import Header from "./components/Header.js";

import "./App.css";

class App extends React.Component {
  state= {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  
  render() {
    return (
      <div 
        className="App"
        style={{padding: '30px 30px'}}>
        <Header />
        <Avatar />
        <br />
        <Date />
        <br />
        <Header />
        <br />
        <TaskList />
      </div>
    );
  }
}

export default App;
