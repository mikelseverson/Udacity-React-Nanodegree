import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class PostForm extends Component {

  handleClose = () => { 

  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.postFormClose}
      />,
      <FlatButton
        label="Submit Post"
        primary={true}
        disabled={true}
        onClick={this.props.postFormSubmit}
      />,
    ]
    return (
      <Dialog
        title="Create Post"
        modal={true}
        actions={actions}
        open={!!this.props.open}>
        <p>Choose Category</p>
        <p>Author</p>
        <p>Title</p>
        <p>Body</p>
      </Dialog>
    )
  }
}

export default PostForm;