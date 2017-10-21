import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardText} from 'material-ui/Card';

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
    return <div>
        {this.props.post && 
          <Card className="post-detail">
            <CardText>
              <h2>{this.props.post.title}</h2>
              <p>{this.props.post.body}</p>
              <p>Author: {this.props.post.author}</p>
              <p>Score: {this.props.post.voteScore}</p>
            </CardText>
          </Card>
        }
        {this.props.comments ? this.props.comments.map(comment => {
            <Card>
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