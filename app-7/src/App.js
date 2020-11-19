import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from "./Components/NewTask.js";
import List from "./Components/List.js";
import Todo from "./Components/Todo.js";

export default class App extends Component {
  constructor () {
    super ();

    this.state = {
      list: [],
    }

    this.handleAddList = this.handleAddList.bind(this);
  }

  handleAddList (task) {
    this.setState ({list: [...this.state.list, task]});
  }

  render () {
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <NewTask add={this.handleAddList}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }

}

