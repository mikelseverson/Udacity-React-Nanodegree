import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ViewPost extends Component {

  render() {
    return (
      <div>
        {this.props.post && 
          <span>
            <p>{this.props.post.id}</p>
            <p>{this.props.post.timestamp}</p>
            <p>{this.props.post.title}</p>
            <p>{this.props.post.body}</p>
            <p>{this.props.post.author}</p>
            <p>{this.props.post.category}</p>
            <p>{this.props.post.voteScore}</p>
            <p>{this.props.post.deleted + ' '}</p>
          </span>
        }
      </div>
    )
  }
}

export default ViewPost;