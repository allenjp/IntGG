import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import MadLib from './MadLib'
import Heatmap from './Heatmap'

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
      type: 'type',
      timestamp: 'timestamp',
      x: 0,
      y: 0,
      killerId: 0,
      victimId: 0
    };
  };

  handleSubmit(input) {
    fetch('/getinfo/' + input).then(function(data) {
      console.log(data);
    });
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Enter a summoner name" id="name-input" />
          <Button type="submit" className="btn btn-success btn-xs" onClick={() => this.handleSubmit(document.getElementById("name-input").value)}>Search</Button>
        </div>
        <div>
          <Heatmap />
          <MadLib data={[this.state.type, this.state.timestamp]} />
        </div>
      </div>
    )
  };
};

export default PlayerStats;