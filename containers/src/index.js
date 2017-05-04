import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import Counter from './Counter';
import Gallery from './Gallery';
import counterReducer from './Counter.reducer';
import galleryReducer from './Gallery.reducer';
import headsTailsReducer from './HeadsTails.reducer'
import * as ReactRedux from 'react-redux';

const INITIAL_STATE = {
  idx: 0,
  count: 0,
  imageUrl: 0
};

function reducer(state = INITIAL_STATE, action) {
  return {
    count: counterReducer(state.count, action),
    idx: galleryReducer(state.idx, action),
    imageUrl:headsTailsReducer(state.imageUrl, action)
  }
}
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

const HeadsTailsContainer = ReactRedux.connect(
    state=> ({index: state.imageUrl }),
    dispatch => ({
        flip: () => dispatch({
            type: 'flip',
            value: Math.random()
        })
    })
)(HeadsTails);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <CounterContainer/>
      <GalleryContainer/>
      <HeadsTailsContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
