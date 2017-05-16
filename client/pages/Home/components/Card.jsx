import React from 'react'
import { Panel } from 'react-bootstrap'

class Card extends React.Component {
  render() {
    return (
      <Panel>
        {this.props.data}
      </Panel>
    )
  };
};

export default Card;