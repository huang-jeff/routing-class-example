import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import NoMatch from './components/NoMatch'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/(home|)' component={Home} />  {/* Utilizes regular expression to allow 2 paths to the same component */}
              <Route exact path='/about' component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
