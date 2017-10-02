import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListPosts extends Component {

  render() {
    return (
      <div>
        <h2>Posts {this.props.category && ('- ' + this.props.category)}</h2> 
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
      </div>
    )
  }
}

export default ListPosts;
