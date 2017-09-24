import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    const url = `http://localhost:3001/categories`;
    fetch(url, { headers: { 'Authorization': 'authman' } })
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.categories.map((category, index) => {
            return <li> {category.name} </li>
          })}
        </p>
      </div>
    );
  }
}

export default App;
