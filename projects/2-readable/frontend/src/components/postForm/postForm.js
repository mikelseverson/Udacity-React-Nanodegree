import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class PostForm extends Component {
  render() {
    return 
      <Dialog
        title="Dialog With Actions"
        modal={false}
        open={true}>
      The actions in this window were passed in as an array of React objects.
      </Dialog>
  }
}

export default PostForm;