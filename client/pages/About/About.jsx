import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
        <h2>sample about page</h2>
      </div>
    )
  };
};

export default About;