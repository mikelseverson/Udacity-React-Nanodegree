import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    if(this.props.post) {
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
            </CardActions>
          </Card>
        )
      }
    } else {
      postCard = <Card><CardText><h2>Post not found</h2></CardText></Card>
    }

    return <div>
        
        {postCard}
        
        {this.props.comments ? this.props.comments.map(comment => {
            return <Card>
              <CardText>
                <p>Author {comment.author}</p>
                <p>{comment.body}</p>
                <p>score: {comment.voteScore}</p>
              </CardText>
            </Card>
        }) : 'No comments'}
    </div>
  }
}

export default ViewPost;