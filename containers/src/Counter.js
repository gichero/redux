import React from 'react';
// import ReactDOM from 'react-dom';
// import * as Redux from 'redux';
// import reducer from './Counter.reducer';


export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>+</button>
        {this.props.count}
        <button onClick={this.props.subtract}>-</button>
      </div>
    );
  }
  }
