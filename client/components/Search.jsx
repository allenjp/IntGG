import React from 'react'

class Search extends React.Component {
  handleSubmit() {
    console.log("handleSubmit trigger");
  }  
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Enter a summoner name" id="name-input" />
          <button type="submit" onClick={() => this.handleSubmit()}>Search</button>
        </div>
        <div>
          <h2>render player stats here</h2>
        </div>
      </div>
    )
  }
}

export default Search;