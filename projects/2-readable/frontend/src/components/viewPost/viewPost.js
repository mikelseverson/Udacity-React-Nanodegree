import React, { Component } from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ViewPost extends Component {

  componentWillMount() {
    if(!this.props.post) {
      this.props.postFetch(this.props.postId)
      this.props.commentsFetch({id: this.props.postId})
    } else {
      this.props.commentsFetch(this.props.post)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.postsFetch(nextProps.category)
    }
  }

  render() {
    var postCard;
    if(this.props.post && !this.props.postIsFetching) {
      if(this.props.post.deleted) {
        postCard = (
          <Card>
            <CardText>
              <h2>Sorry, this post has been deleted.</h2>
            </CardText>
          </Card>)
      } else {
        postCard = (
          <Card className="post-detail">
            <CardText>
              <h2>{this.props.post.title}</h2>
              <p>{this.props.post.body}</p>
              <p>Author: {this.props.post.author}</p>
              <p>Score: {this.props.post.voteScore}</p>
            </CardText>
            <CardActions>
              <FlatButton label="Edit" onClick={() => this.props.editPost(this.props.post)}/>
              <FlatButton label="Remove" onClick={() => this.props.deletePost(this.props.post)}/>
              <FlatButton label="Add Comment" onClick={() => this.props.commentFormOpen(this.props.post)}/>
              <FlatButton label="Upvote" onClick={() => this.props.postVote(this.props.post, 'upVote')} />
              <FlatButton label="Downvote" onClick={() => this.props.postVote(this.props.post, 'downVote')}/>
            </CardActions>
          </Card>
        )
      }
    } else if(this.props.postIsFetching) {
      postCard = <Card><CardText><h2>Loading Post...</h2></CardText></Card>
    } else {
      postCard = <Card><CardText><h2>Post not found</h2></CardText></Card>
    }

    return <div>
        {postCard}
        {this.props.comments ? this.props.comments.map(comment => {
            return !comment.deleted && this.props.post && !this.props.post.deleted && <Card key={comment.id}>
              <CardText>
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>score: {comment.voteScore}</p>
              </CardText>
              <CardActions>
                <FlatButton label="Edit" onClick={() => this.props.commentFormOpen(this.props.post, comment)}/>
                <FlatButton label="Remove" onClick={() => this.props.deleteComment(comment)}/>
                <FlatButton label="Upvote" onClick={() => this.props.commentVote(comment, 'upVote')}/>
                <FlatButton label="Downvote" onClick={() => this.props.commentVote(comment, 'downVote')}/>
              </CardActions>
            </Card>
        }) : 'No comments'}
    </div>
  }
}

export default ViewPost;