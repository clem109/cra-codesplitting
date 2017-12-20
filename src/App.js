import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./pages/Home.js'))
const AsyncAbout = asyncComponent(() => import('./pages/About.js'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={AsyncHome} />
            <Route path="/about" component={AsyncAbout} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
