import React from 'react'

class MadLib extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <p>MadLib component</p>
        <p>MadLib props: {this.props.data}</p>
      </div>
    )
  };
};

export default MadLib;