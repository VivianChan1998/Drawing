import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Top from './Top';
import '../App.css'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Top ></Top>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
