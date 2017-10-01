import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CategoryNavigation from './categoryNavigation/categoryNavigation'

class Header extends Component {

  render() {
    return (
      <div className="App-header">
          <h2 tabIndex="0">
          Welcome to Readable
          </h2>
          <p>
          <Link 
              to="/">
              Home
          </Link>
          <CategoryNavigation
              categories={this.props.categories}
          />
          </p>
      </div>
    )
  }
}

export default Header;
