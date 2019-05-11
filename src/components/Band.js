import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{this.props.band.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
