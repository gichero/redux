import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer);

class Counter extends React.Component {
  render() {
    let count = store.getState();


    return (
      <div>
        <button onClick={()=> this.subtract()}> - </button>
        {count}
        <button onClick={()=> this.add()}> + </button>
      </div>
    );
  }

  }

  function add(){
      store.dispatch({
          type: 'add'
      });
  }

  function subtract(){
      store.dispatch({
          type: 'subtract'
      });
  }





function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
