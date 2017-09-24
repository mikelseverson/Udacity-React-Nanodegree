import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToComponent (calendar) {
  return {
    calendar: 'Mikel'
  }
}
export default connect(mapStateToComponent)(App)
