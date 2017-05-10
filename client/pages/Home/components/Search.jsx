import React from 'react'

class Search extends React.Component {
  handleSubmit(input) {
    fetch('/getdeathinfo/' + input).then(function(data) {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Enter a summoner name" id="name-input" />
          <button type="submit" onClick={() => this.handleSubmit(document.getElementById("name-input").value)}>Search</button>
        </div>
        <div>
          <h2>render player stats here</h2>
        </div>
      </div>
    )
  }
}

export default Search;