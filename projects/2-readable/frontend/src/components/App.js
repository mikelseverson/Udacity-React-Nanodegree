import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'

import Header from './common/header/header'
import ListPosts from './common/listPosts/listPosts'
import ViewPost from './viewPost/viewPost'
import PostForm from './postForm/postForm'
import CommentForm from './commentForm/commentForm'

import { 
  categoriesFetch,
  postsFetch,
  postFetch,
  commentsFetch,
  postsSort,
  postFormOpen,
  postFormClose,
  postFormEdit,
  postFormSubmit,
  postDelete,
  commentDelete,
  commentFormOpen,
  commentFormEdited,
  commentFormClose,
  commentFormSubmit,
} from '../actions'

import './App.css'

/***TODO***

  POST LIST
    * Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. 

  POST DETAILS
    * Posts should have button for deleting that post.
      Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at it's URL.

  COMMENTS
    * A mechanism for adding a new comment is visible on the detail page and functional.
    * Listed comments are displayed with author, current score, and a voting mechanism to upvote or downvote the comment. 
    * Comments should have buttons or links for editing or deleting that comment.
    * A mechanism for deleting comments exists. 
      Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at it's URL.

  COMMENTS / POSTS
    * The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.
    * Edit buttons for posts/comments open a form with existing data pre-populated. Submitting the form correctly updates the data for the comment/post.
*/

class App extends Component {

  componentDidMount() {
    this.props.categoriesFetch()
  }

  render() {
    return (
      <div className="App">
        <Header
          categories={this.props.categories.data}
          postsSort={this.props.postsSort}
          sort={this.props.posts.sort}
        />
        <PostForm
          open={this.props.postForm.isEditing}
          postData={this.props.postForm}
          categories={this.props.categories.data}
          postFormChange={this.props.postFormEdit}
          postFormClose={this.props.postFormClose}
          postFormSubmit={this.props.postFormSubmit}
        />
        <CommentForm
          open={this.props.commentForm.isEditing}
          commentData={this.props.commentForm}
          commentFormChange={this.props.commentFormEdited}
          commentFormClose={this.props.commentFormClose}
          commentFormSubmit={this.props.commentFormSubmit}
        />
        <Switch>
          <Route 
            path="/"
            exact
            render={() => 
            <ListPosts 
                posts={this.props.posts.data}
                postsFetch={this.props.postsFetch}
                createPost={this.props.postFormOpen}
              />
            }
          />
          <Route 
            path="/:category/:postId"
            render={({match}) =>
              <ViewPost 
                post={this.props.posts.data.filter(post => post.id === match.params.postId)[0]}
                postId={match.params.postId}
                comments={this.props.comments.data}
                commentsFetch={this.props.commentsFetch}
                postFetch={this.props.postFetch}
                editPost={this.props.postFormOpen}
                deletePost={this.props.deletePost}
                deleteComment={this.props.deleteComment}
                commentFormOpen={this.props.commentFormOpen}
              />
            }
          />
          <Route 
            path="/:category"
            render={({match}) =>
              <div>
                <ListPosts 
                  posts={this.props.posts.data}
                  category={match.params.category}
                  postsFetch={this.props.postsFetch}
                  createPost={this.props.postFormOpen}
                />
              </div>
            }
          />
        </Switch>
      </div>
    )
  }
}

const bindActionsToDispatch = dispatch => ({
    categoriesFetch:   ()                      => dispatch( categoriesFetch() ),
    postsFetch:        (category)              => dispatch( postsFetch(category) ),
    postFetch:         (postId)                => dispatch( postFetch(postId) ),
    postsSort:         (sort)                  => dispatch( postsSort(sort) ),
    commentsFetch:     (post)                  => dispatch( commentsFetch(post) ),
    postFormOpen:      (post)                  => dispatch( postFormOpen(post) ),
    postFormClose:     ()                      => dispatch( postFormClose() ),
    postFormSubmit:    (post, isNewPost)       => dispatch( postFormSubmit(post, isNewPost) ),
    postFormEdit:      (post)                  => dispatch( postFormEdit(post) ),
    deletePost:        (post)                  => dispatch( postDelete(post) ),
    deleteComment:     (comment)               => dispatch( commentDelete(comment) ),
    commentFormOpen:   (post, comment)         => dispatch( commentFormOpen(post, comment) ),
    commentFormEdited: (comment)               => dispatch( commentFormEdited(comment) ),
    commentFormClose:  ()                      => dispatch( commentFormClose() ),
    commentFormSubmit: (comment, isNewComment) => dispatch( commentFormSubmit(comment, isNewComment) )
})

export default withRouter(
  connect(state => state, bindActionsToDispatch)(App)
)
