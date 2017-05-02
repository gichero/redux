import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Counter extends React.Component {

    add(){
      store.dispatch({
          type: 'add'
      });
    }

    subtract(){
      store.dispatch({
          type: 'subtract'
      });
    }



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



function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
