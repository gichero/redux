import React from 'react';



export default class HeadsTails extends React.Component {
  render() {

    return (
      <div>
      <div>
        <img src={this.props.imageUrl}/>
        </div>
        <div>
        <button onClick={this.props.flip}>
          Flip
        </button>
        </div>
      </div>
    );
  }
}
