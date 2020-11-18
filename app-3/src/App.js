import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor () {
    super ();

    this.state= {
      hobbits: ["Frodo", "Sam", "Merry", "Pipping"],
      filteredHobbits: ""
    }
  }

  handleChange (value) {
    this.setState ({
      filteredHobbits: value
    })
  }

  render () {
    let showFilteredHobbits = this.state.hobbits.filter((element,index) => {
      return element.includes(this.state.filteredHobbits);
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input className="user-input" onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        {showFilteredHobbits}
      </div>
    );
  }


}

