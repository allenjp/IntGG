import React from 'react'
import { Button } from 'react-bootstrap'

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
          <Button type="submit" className="btn btn-success btn-xs" onClick={() => this.handleSubmit(document.getElementById("name-input").value)}>Search</Button>
        </div>
        <div>
          <h2>render player stats here</h2>
        </div>
      </div>
    )
  }
}

export default Search;