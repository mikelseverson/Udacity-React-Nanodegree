import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

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
                  <Link
                    to={`/${post.category}/${post.id}`}>
                    <CardHeader
                      title={post.title}
                    />
                  </Link>
                  <CardActions>
                    <Link
                      to={`/${post.category}/${post.id}`}>
                      <FlatButton label="View Post"/>
                    </Link>
                    <FlatButton label="Upvote"/>
                    <FlatButton label="Downvote"/>
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
