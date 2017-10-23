import React, { Component } from 'react';

import {
  Dialog,
  FlatButton,
  MenuItem,
  SelectField,
  TextField
} from 'material-ui'

class PostForm extends Component {
  handleCategoryChange = (e, key, category) => this.props.postFormChange({
    ...this.props.postData.post,
    category
  })

  handleAuthorChange = (e, author) => this.props.postFormChange({
    ...this.props.postData.post,
    author
  })

  handleTitleChange = (e, title) => this.props.postFormChange({
    ...this.props.postData.post,
    title
  })

  handleBodyChange = (e, body) => this.props.postFormChange({
    ...this.props.postData.post,
    body
  })

  handleSubmit = () => {
    let {category, author, body, title, id} = this.props.postData.post
    let {newPost} = this.props.postData
    let postData = newPost ? 
      {
        category,
        author,
        body,
        title,
        id
      } : 
      {
        title,
        body,
        id
      }
    this.props.postFormSubmit(postData, newPost)
  }

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
        disabled={!this.props.postData.submitEnabled}
        onClick={this.handleSubmit}
      />,
    ]
    return (
      <Dialog
        title={this.props.postData.newPost ? 'New Post' : 'Edit Post'}
        modal={true}
        actions={actions}
        autoScrollBodyContent={true}
        open={!!this.props.open}>
        {this.props.postData.newPost && 
          <div>
            <SelectField
              floatingLabelText="Category"
              value={this.props.postData.post.category}
              onChange={this.handleCategoryChange}>
              {this.props.categories
                .map(category => 
                  <MenuItem
                    key={category.name} 
                    value={category.name} 
                    primaryText={category.name} 
                  />
                )
              }
            </SelectField>
          </div>
        }
        {this.props.postData.newPost &&
          <div>
            <TextField 
              floatingLabelText="Author"
              value={this.props.postData.post.author}
              onChange={this.handleAuthorChange}
            />
          </div>
        }
        <TextField 
          floatingLabelText="Title"
          fullWidth={true}
          value={this.props.postData.post.title}
          onChange={this.handleTitleChange}
        />
        <br />
        <TextField 
          floatingLabelText="Body"
          multiLine={true}
          fullWidth={true}
          rows={4}
          value={this.props.postData.post.body}
          onChange={this.handleBodyChange}
        />
      </Dialog>
    )
  }
}

export default PostForm;