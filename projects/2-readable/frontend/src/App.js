import React, { Component } from 'react';
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
          <h2>Welcome to Readable</h2>
        </div>
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
