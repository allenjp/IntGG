import React from 'react'

class MadLib extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.test)
    return(
      <p>MadLib component properties: {this.props.sending}</p>
    )
  }
}

export default MadLib;