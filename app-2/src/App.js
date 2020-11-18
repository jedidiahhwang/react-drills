import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor () {
    super ();

    this.state = {
      names: ["Gandalf", "Saruman", "Radagast"]
    }
  }


  render () {
    let wizards = this.state.names.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })


    return (
      <div className="App">
        {wizards}
      </div>
    );
  }

}

