import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CategoryNavigation extends Component {

  render() {
    return (
      <span>
        {this.props.categories
          .map((category, index) => 
            <span>
              <Link 
                to={`/category/${category.path}`} 
                key={category.path}>
                {category.name}
              </Link>
              &nbsp;
            </span>
          )
        }
      </span>
    )
  }
}

export default CategoryNavigation;
