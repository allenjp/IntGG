import React from 'react'
import Search from './components/Search'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the App container, all pages will be rendered inside this bro.</h1>
        <h2>This is where react-router should do some shit.</h2>
        <Search />
      </div>
    )
  }
}

export default App;