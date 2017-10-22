import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ListPosts extends Component {

  componentWillMount() {
    this.props.postsFetch(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.postsFetch(nextProps.category)
    }
  }

  render() {
    return (
      <div className='post-list-wrapper'>
        <div className='post-list'>
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
        <RaisedButton
          className="create-post-btn"
          label="CREATE POST"
          onClick={() => this.props.createPost()}
          fullWidth={true}
          primary={true}
        />
      </div>
    )
  }
}

export default ListPosts;
