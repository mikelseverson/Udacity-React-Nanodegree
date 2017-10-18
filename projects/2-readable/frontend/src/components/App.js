import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'

import Header from './common/header/header'
import ListPosts from './common/listPosts/listPosts'
import ViewPost from './viewPost/viewPost'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { categoriesFetch, postsFetch, postFetch, commentsFetch, postsSort } from '../actions'

import './App.css';

/*
  ***TODO***

  COMMENTS
  * A mechanism for adding a new comment is visible on the detail page and functional.
  * Listed comments are displayed with author, current score, and a voting mechanism to upvote or downvote the comment. 
  * Comments should have buttons or links for editing or deleting that comment.

  POSTS
  * List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.
  * Application has a form for creating a new post. 
    Submitting the form properly adds the post to the correct category.
  * Listed posts are displayed with title, author, number of comments, current score, 
    and a voting mechanism to upvote or downvote the post. 
  * Posts should have buttons or links for editing or deleting that post.

  COMMENTS / POSTS
  * The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.
  * Edit buttons for posts/comments open a form with existing data pre-populated. 
    Submitting the form correctly updates the data for the comment/post.
  * A mechanism for deleting posts and comments exists. 
  * Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at it's URL.
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
          postsSort={this.props.postsSort}
          sort={this.props.posts.sort}
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
                postId={match.params.postId}
                comments={this.props.comments ? this.props.comments.data : []}
                commentsFetch={this.props.commentsFetch}
                postFetch={this.props.postFetch}
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
  postsFetch : (category) => {dispatch(postsFetch(category))},
  postFetch : (postId) => {dispatch(postFetch(postId))},
  postsSort : (sort) => {dispatch(postsSort(sort))},
  commentsFetch : (post) => {dispatch(commentsFetch(post))},
});

export default withRouter(connect(state => state, bindActionsToDispatch)(App))
