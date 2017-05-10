import React from 'react'
import { Link } from 'react-router-dom'

import Search from './components/Search'
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
        <Search />
      </div>
    )
  }
}

export default Home;