import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
          {/* list of categories */}
          <p>
            {
              /* should link to a category view for that category */
              this.state.categories
                .map((category, index) => ' ' +  category.name +  ' ')
            }
          </p>
        </div>
        <Route
          path="/"
          exact
          render={() => (<p>hi</p>)}
        />
        <Route 
          path="/category/:name"
          render={() => null}
        />
        <Route 
          path="/post"
          render={() => null}
        />
        <Route 
          path="/create/:id"
          render={() => null}
        />
          {/* control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp */}

          {/* control for adding a new post */}

          {/* List of all posts ordered by vote score */}
      </div>
    );
  }
}

export default App;
