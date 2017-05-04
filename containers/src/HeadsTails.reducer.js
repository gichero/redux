


export default function reducer(state, action) {
    let defaultpath = 'images/quarter-front.png';
  if (action.type === 'flip') {
    if (action.value > 0.5) {
      return 'images/quarter-front.png';
  } else {
      return 'images/quarter-back.png';
    }
  } else {
    return defaultpath;
  }
}
