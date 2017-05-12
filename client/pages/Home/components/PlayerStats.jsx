import React from 'react'
import { Button } from 'react-bootstrap'
import MadLib from './MadLib'

// var death_obj = {
//     "type": event.type,
//     "timestamp": event.timestamp,
//     "position": {
//         "x": event.position.x,
//         "y": event.position.y
//     },
//     "killerId": event.killerId,
//     "victimId": event.victimId
// }

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'testing testing'
    };
  }

  handleSubmit(input) {
    fetch('/getdeathinfo/' + input).then(function(data) {
      console.log(data);
    });
  }
  render() {
    console.log(this.state.test)
    return (
      <div>
        <div>
          <input type="text" placeholder="Enter a summoner name" id="name-input" />
          <Button type="submit" className="btn btn-success btn-xs" onClick={() => this.handleSubmit(document.getElementById("name-input").value)}>Search</Button>
        </div>
        <div>
          <h2>render player stats here</h2>
          <MadLib sending={this.state.test} />
        </div>
      </div>
    )
  }
}

export default PlayerStats;