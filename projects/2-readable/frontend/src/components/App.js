import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import CategoryNavigation from './common/categoryNavigation/categoryNavigation'
import ListPosts from './common/listPosts/listPosts'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: []
    }
  }

  getCategories = () => {
    let url = `http://localhost:3001/categories`;
    return fetch(url, { headers: { 'Authorization': 'authman' } })
    .then(res => res.json())
    .then(data => this.setState(data));
  }

  getPosts = () => {
    let url = `http://localhost:3001/posts`;
    return fetch(url, { headers: { 'Authorization': 'authman' } })
    .then(res => res.json())
    .then(data => this.setState({posts: data}));
  }

  componentDidMount() {
    this.getCategories();
    this.getPosts();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 tabIndex="0">
            Welcome to Readable
          </h2>
          <p>
            <Link 
              to="/">
              Home
            </Link>
            <CategoryNavigation
              categories={this.state.categories}
            />
          </p>
        </div>
        <Route
          path="/"
          exact
          render={() => 
            <ListPosts 
              posts={this.state.posts}
            />
          }
        />
        <Route 
          path="/category/:slug"
          render={({match}) => 
            <p>
              {match.params.slug}
            </p>
          }
        />
        <Route 
          path="/post/:id"
          render={() => null}
        />
        <Route 
          path="/post/create/:id"
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
