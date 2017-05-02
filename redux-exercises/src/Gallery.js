import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Gallery.reducer';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

let store = Redux.createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Gallery extends React.Component {

  render() {
      let state = store.getState();
      let currentImage = state.images[state.currentIndex];
      let next = () => store.dispatch({type: 'next'});
    
    return (
      <div>
        <button>
          Previous
        </button>
        <button onClick={next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Gallery images={IMAGES}/>,
    document.getElementById('root')
  );
}
display();
store.subscribe(display);
