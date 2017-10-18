import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CategoryNavigation from './categoryNavigation/categoryNavigation'

import {Toolbar, ToolbarGroup, } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import AppBar from 'material-ui/AppBar';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event, index, sort) => this.props.postsSort(sort);

  render() {
    return (
      <div>
        <AppBar
            title="Welcome to Readable"
            showMenuIconButton={false}
          />
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            &nbsp;
            <Link 
              to="/">
              All
            </Link>
            &nbsp;
            <CategoryNavigation
              categories={this.props.categories}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <SelectField floatingLabelText="Sort" value={this.props.sort} onChange={this.handleChange}>
              <MenuItem value='voteScore' primaryText="Show Top Rated" />
              <MenuItem value='date' primaryText="Show Most Recent" />
            </SelectField> 
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default Header;
