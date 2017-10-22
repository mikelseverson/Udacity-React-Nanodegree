import React, { Component } from 'react';

import {
  Dialog,
  FlatButton,
  MenuItem,
  SelectField,
  TextField
} from 'material-ui'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null,
      author: '',
      title: '',
      body: '',
      submitEnabled: false
    }
  }

  handleCategoryChange = (e, key, category) => {
    this.setState(state => ({
        ...state,
        category,
        submitEnabled: this.checkFormValid({
          ...state,
          category
        })
      })
    )
  }

  handleAuthorChange = (e, author) => {
    this.setState(state => ({
        ...state,
        author,
        submitEnabled: this.checkFormValid({
          ...state,
          author
        })
      })
    )
  }

  handleTitleChange = (e, title) => {
    this.setState(state => ({
        ...state,
        title,
        submitEnabled: this.checkFormValid({
          ...state,
          title
        })
      })
    )
  }

  handleBodyChange = (e, body) => {
    this.setState(state => ({
        ...state,
        body,
        submitEnabled: this.checkFormValid({
          ...state,
          body
        })
      })
    )
  }

  handleSubmit = () => {
    let {category, author, body, title} = this.state
    this.props.postFormSubmit({
      category: category.name,
      author,
      body,
      id : this.generatePostGUID(),
      timestamp: Date.now(),
      title,
    })
  }

  generatePostGUID = () => {
    let S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  checkFormValid = state => state.category && state.author.length > 0 && state.title.length > 0 && state.body.length > 0

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
        disabled={!this.state.submitEnabled}
        onClick={this.handleSubmit}
      />,
    ]
    return (
      <Dialog
        title="Create Post"
        modal={true}
        actions={actions}
        autoScrollBodyContent={true}
        open={!!this.props.open}>
        <SelectField
          floatingLabelText="Category"
          value={this.state.category}
          onChange={this.handleCategoryChange}>
          {this.props.categories
            .map(category => 
              <MenuItem 
                value={category} 
                primaryText={category.name} 
              />
            )
          }
        </SelectField> 
        <br />
        <TextField 
          floatingLabelText="Author"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <br />
        <TextField 
          floatingLabelText="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <br />
        <TextField 
          floatingLabelText="Body"
          multiLine={true}
          fullWidth={true}
          rows={4}
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
      </Dialog>
    )
  }
}

export default PostForm;