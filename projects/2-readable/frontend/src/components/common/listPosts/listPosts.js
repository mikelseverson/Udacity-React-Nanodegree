import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ListPosts extends Component {

  render() {
    return (
      <div>
          <br />
          {this.props.posts
            .map(post => 
            <span>
              <Card key={post.id}>
                <CardHeader
                  title={post.title}
                />
                <CardActions>
                  <Link
                    to={`/post/${post.id}`}>
                    View Post
                  </Link>
                </CardActions>
              </Card>
              <br />
              </span>
            )
          }
      </div>
    )
  }
}

export default ListPosts;
