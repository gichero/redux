import React from 'react';
// import ReactDOM from 'react-dom';
// import * as Redux from 'redux';
// import reducer from './Gallery.reducer';


export default class Gallery extends React.Component {
  render() {
      let IMAGES = [
        'images/comfy.jpg',
        'images/farted.jpg',
        'images/hate.jpg',
        'images/lolcat_airplane.jpg',
        'images/mocked.jpg',
        'images/monorail.jpg',
      ];

      let currentImage = IMAGES[this.props.index];

    return (
      <div>
        <button onClick={this.props.previous}>
          Previous
        </button>
        <button onClick={this.props.next}>
          Next
        </button>
        <br/>
          <img src={currentImage}/>
        <div>
          {IMAGES.map((imageUrl, idx) =>
            <img key={idx} src={imageUrl} height="60" onClick={() => this.select(idx)}/>
          )}
        </div>
      </div>
    );
  }
}
