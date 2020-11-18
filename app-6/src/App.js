import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from "./Components/Todo.js"

export default class App extends Component {
  constructor () {
    super ();

    this.state = {
      list: [],
      input: ""
    }

    this.handleAddList = this.handleAddList.bind(this);
  }

  handleInputChange (value) {
    this.setState ({
      input: value
    })
  }

  handleAddList () {
    this.setState ({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render () {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })

    return (
      <div className="App">
        <h1>To Do List:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter New Task"
            onChange={(e) => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddList}>Add Task</button>
        </div>

      <br/>

        {list}
      </div>
    );
  }

}

