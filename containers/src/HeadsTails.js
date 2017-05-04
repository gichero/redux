import React from 'react';



export default class HeadsTails extends React.Component {
  render() {
    let imageUrl;
    if (store.getState()) {
      imageUrl = 'images/quarter-front.png';
    } else {
      imageUrl = 'images/quarter-back.png';
    }

    let flip = () => store.dispatch({
      type: 'flip',
      value: Math.random()
    });
    return (
      <div>
        <img src={imageUrl}/>
        <button onClick={flip}>
          Flip!
        </button>
      </div>
    );
  }
}
