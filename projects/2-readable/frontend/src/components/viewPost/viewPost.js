import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardText} from 'material-ui/Card';

class ViewPost extends Component {

  render() {
    return (
      <div>
        {this.props.post && 
          <Card>
          <CardText>
            {/* <p>{this.props.post.id}</p>
            <p>{this.props.post.timestamp}</p> */}
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.body}</p>
            <p>Author: {this.props.post.author}</p>
            <p>Score: {this.props.post.voteScore}</p>
            </CardText>
          </Card>
        }
      </div>
    )
  }
}

export default ViewPost;