import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './common/header/header'
import ListPosts from './common/listPosts/listPosts'
import ViewPost from './viewPost/viewPost'
import './App.css';

/* 
  TODO:
  * Control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
  * Control for adding a new post
  * List of all posts ordered by vote score
*/

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

  getPosts = category => {
    var url = `http://localhost:3001`;
    url += category ? `/${category}/posts` : `/posts`;
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
        <Header
          categories={this.state.categories}
        />
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
            <ListPosts 
              category={match.params.slug}
              posts={this.state.posts}
            />
          }
        />
        <Route 
          path="/post/:id"
          render={({match}) =>
            <ViewPost 
              post={this.state.posts.filter(post => post.id === match.params.id)[0]}
            />
          }
        />
        <Route 
          path="/post/create/:id?"
          render={() => <div>{'Create Post'}</div>}
        />
      </div>
    );
  }
}

export default App;
