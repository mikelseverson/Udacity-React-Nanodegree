import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router'

import Header from './common/header/header'
import ListPosts from './common/listPosts/listPosts'
import ViewPost from './viewPost/viewPost'

import { categoriesFetch, postsFetch } from '../actions'

import './App.css';

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

  componentDidMount() {
    this.props.categoriesFetch()
  }

  render() {
    return (
      <div className="App">
        <Header
          categories={this.props.categories ? this.props.categories.data : []}
        />
        <Switch>
          <Route 
            path="/"
            exact
            render={() => 
              <ListPosts 
                posts={this.props.posts ? this.props.posts.data : []}
                postsFetch={this.props.postsFetch}
              />
            }
          />
          <Route 
            path="/:category/:postId"
            render={({match}) =>
              <ViewPost 
                post={this.props.posts ? this.props.posts.data.filter(post => post.id === match.params.postId)[0] : null}
              />
            }
          />
          <Route 
            path="/:category"
            render={({match}) =>
              <div>
                <ListPosts 
                  posts={this.props.posts ? this.props.posts.data : []}
                  category={match.params.category}
                  postsFetch={this.props.postsFetch}
                />
              </div>
            }
          />
          <Route
            path="/post/create/:id?"
            render={() => <div>Create Post</div>}
          />
        </Switch>
      </div>
    )
  }
}

const bindActionsToDispatch = dispatch => ({
  categoriesFetch : () => {dispatch(categoriesFetch())},
  postsFetch : (category) => {dispatch(postsFetch(category))}
});

export default connect(state => state, bindActionsToDispatch)(App)
