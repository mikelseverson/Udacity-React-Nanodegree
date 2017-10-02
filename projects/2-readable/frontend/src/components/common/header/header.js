import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CategoryNavigation from './categoryNavigation/categoryNavigation'

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

class Header extends Component {

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
        </Toolbar>
      </div>
    )
  }
}

export default Header;
