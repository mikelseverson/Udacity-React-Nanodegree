import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class ListPosts extends Component {

  componentWillMount() {
    this.props.postsFetch(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.postsFetch(this.props.category)
    }
  }

  render() {
    return (
      <div>
          {this.props.posts &&
            this.props.posts
              .map(post => 
                <Card 
                  key={post.id} 
                  className='post-card'>
                  <CardHeader
                    title={post.title}
                  />
                  <CardActions>
                    <Link
                      to={`/${post.category}/${post.id}`}>
                      View Post
                    </Link>
                  </CardActions>
                </Card>
              )
          }
      </div>
    )
  }
}

export default ListPosts;
