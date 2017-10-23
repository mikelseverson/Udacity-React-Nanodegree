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
  postVote,
  commentVote,
  commentDelete,
  commentFormOpen,
  commentFormEdited,
  commentFormClose,
  commentFormSubmit,
} from '../actions'

import './App.css'

/***TODO***
  POST LIST
    * Listed posts are displayed with number of comments. 
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
                postVote={this.props.postVote}
              />
            }
          />
          <Route 
            path="/:category/:postId"
            render={({match}) =>
              <ViewPost 
                post={this.props.posts.data.filter(post => post.id === match.params.postId)[0]}
                postIsFetching={this.props.posts.isFetching}
                postId={match.params.postId}
                comments={this.props.comments.data}
                commentsFetch={this.props.commentsFetch}
                postFetch={this.props.postFetch}
                editPost={this.props.postFormOpen}
                deletePost={this.props.deletePost}
                deleteComment={this.props.deleteComment}
                commentFormOpen={this.props.commentFormOpen}
                commentVote={this.props.commentVote}
                postVote={this.props.postVote}
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
    postVote:          (post, option)          => dispatch( postVote(post, option)),
    commentVote:       (comment, option)       => dispatch( commentVote(comment, option)),
    deleteComment:     (comment)               => dispatch( commentDelete(comment) ),
    commentFormOpen:   (post, comment)         => dispatch( commentFormOpen(post, comment) ),
    commentFormEdited: (comment)               => dispatch( commentFormEdited(comment) ),
    commentFormClose:  ()                      => dispatch( commentFormClose() ),
    commentFormSubmit: (comment, isNewComment) => dispatch( commentFormSubmit(comment, isNewComment) )
})

export default withRouter(
  connect(state => state, bindActionsToDispatch)(App)
)
