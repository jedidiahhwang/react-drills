import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Image from "./Components/Image.js"

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Image url={"https://media.vlipsy.com/vlips/nDqfswLv/preview.jpg"}/>
      </div>
    );

  }
}

