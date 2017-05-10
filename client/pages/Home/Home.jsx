import React from 'react'
import { Link } from 'react-router-dom'

import PlayerStats from './components/PlayerStats'
import Banner from './components/Banner'


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <Link to="/about"> About </Link>
        </div>
        <Banner />
        <PlayerStats />
      </div>
    )
  }
}

export default Home;