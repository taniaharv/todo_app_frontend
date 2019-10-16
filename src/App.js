import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <Header />
      <Intro introDescription="Hello" />
      <Intro introDescription="Woooo" />
      <Task taskDescription="Buy some milk"/>
      <Task taskDescription="Pickup dog food"/>
      <Task taskDescription="Buy chocolate"/>
      <Task taskDescription="Do Homework"/>
    </div>
    
  );
}

export default App;
