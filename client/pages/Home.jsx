import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
        <h2>featured feeders banner</h2>
        <Search />
      </div>
    )
  }
}

export default Home;