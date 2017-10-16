import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './common/header/header'
import ListPosts from './common/listPosts/listPosts'
import ViewPost from './viewPost/viewPost'
import './App.css';
import { connect } from 'react-redux';

import { categoriesFetch, categorySet, postsFetch } from '../actions'

/* 
  TODO:
  * Control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
  * Control for adding a new post
  * List of all posts ordered by vote score
*/

class App extends Component {
  constructor(props) {
    super(props)
  }


  getPosts = category => {
    var url = `http://localhost:3001`
    url += category ? `/${category}/posts` : `/posts`
    return fetch(url, { headers: { 'Authorization': 'authman' } })
      .then(res => res.json())
      // .then(posts => store.dispatch(categoriesFetch(posts)))
  }

  componentDidMount() {
    const { store } = this.props
    store.dispatch(categoriesFetch());
    store.dispatch(postsFetch());
    this.getPosts();
  }

  render() {
    return (
      <div className="App">
        <Header
          categories={this.props.categories ? this.props.categories.data : []}
        />
        <Route 
          path="/"
          exact
          render={() => 
            <ListPosts 
              posts={this.props.posts ? this.props.posts.data : []}
            />
          }
        />
        <Route 
          path="/:category"
          render={({match}) => 
            <div>
              <p>
                {match.params.category}
              </p>
              <ListPosts 
                posts={this.props.posts ? this.props.posts.data : []}
              />
            </div>
          }
        />
        <Route 
          path="/:category/:postId"
          render={({match}) =>
            <ViewPost 
              post={this.props.posts ? this.props.posts.data.filter(post => post.id === match.params.postId)[0] : {}}
            />
          }
        />
        <Route
          path="/post/create/:id?"
          render={() => <div>Create Post</div>}
        />
      </div>
    );
  }
}

export default connect(state => state)(App)
