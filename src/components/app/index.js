import React from 'react'
import { Link } from 'react-router'

import './style.scss'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lazyload">Lazy Load</Link></li>
          <li><Link to="/api">API</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}


