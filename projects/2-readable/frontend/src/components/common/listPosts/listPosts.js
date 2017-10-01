import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListPosts extends Component {

  render() {
    return (
      <ul>
        {this.props.posts
          .map(post => 
            <li key={post.id}>
              <Link
                to={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }
}

export default ListPosts;
