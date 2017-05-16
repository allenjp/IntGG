import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  };
};

export default App;