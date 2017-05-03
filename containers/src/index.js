import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import Counter from './Counter';
import Gallery from './Gallery';
import counterReducer from './Counter.reducer';
import galleryReducer from './Gallery.reducer';
import * as ReactRedux from 'react-redux';

const INITIAL_STATE = {
  idx: 0,
  count: 0
};

function reducer(state = INITIAL_STATE, action) {
  return {
    count: counterReducer(state.count, action),
    idx:galleryReducer(state.idx, action)
  }
}
const store = Redux.createStore(reducer);

const CounterContainer = ReactRedux.connect(
  state => ({ count: state.count }),
  dispatch => ({
    add: () => dispatch({
      type: 'add'
    }),
    subtract: () => dispatch({
      type: 'subtract'
    })
  })
)(Counter);

const GalleryContainer = ReactRedux.connect(
    state=> ({index: state.idx }),
    dispatch => ({
        next: () => dispatch({
            type: 'next'
        }),
        previous: () => dispatch({
            type: 'previous'
        })
    })
)(Gallery);



ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <CounterContainer/>
      <GalleryContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
