import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardText} from 'material-ui/Card';

class ViewPost extends Component {

  render() {
    return this.props.post && 
      <Card className="post-detail">
        <CardText>
          <h2>{this.props.post.title}</h2>
          <p>{this.props.post.body}</p>
          <p>Author: {this.props.post.author}</p>
          <p>Score: {this.props.post.voteScore}</p>
        </CardText>
      </Card>
  }
}

export default ViewPost;