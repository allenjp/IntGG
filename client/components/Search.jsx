import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a summoner name" id="name-input" />
        <button type="submit">Search</button>
      </div>
    )
  }
}

export default Search;