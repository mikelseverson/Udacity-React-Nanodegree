import React, { Component } from 'react';

import {
  Dialog,
  FlatButton,
  TextField
} from 'material-ui'

class CommentForm extends Component {

  handleAuthorChange = (e, author) => this.props.commentFormChange({
    ...this.props.commentData.comment,
    author: author.substr(0, 20)
  })

  handleTitleChange = (e, title) => this.props.commentFormChange({
    ...this.props.commentData.comment,
    title: title.substr(0, 60)
  })

  handleBodyChange = (e, body) => this.props.commentFormChange({
    ...this.props.commentData.comment,
    body: body.substr(0, 200)
  })

  handleSubmit = () => this.props.commentFormSubmit({
    ...this.props.commentData.comment
  }, this.props.commentData.isNewComment)

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.commentFormClose}
      />,
      <FlatButton
        label="Submit Comment"
        primary={true}
        disabled={!this.props.commentData.submitEnabled}
        onClick={this.handleSubmit}
      />,
    ]
    return (
      <Dialog
        title={this.props.commentData.isNewComment ? 'New Comment' : 'Edit Comment'}
        modal={true}
        actions={actions}
        autoScrollBodyContent={true}
        open={this.props.open}>
        {this.props.commentData.isNewComment &&
          <div>
            <TextField 
              floatingLabelText="Author"
              value={this.props.commentData.comment.author}
              onChange={this.handleAuthorChange}
            />
          </div>
        }
        <TextField 
          floatingLabelText="Body"
          multiLine={true}
          fullWidth={true}
          rows={4}
          value={this.props.commentData.comment.body}
          onChange={this.handleBodyChange}
        />
      </Dialog>
    )
  }
}

export default CommentForm;