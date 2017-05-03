const INITIAL_STATE = {
  idx: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'next') {
    let nextIndex = state + 1;
    if (nextIndex >= 6) {
      nextIndex = 0;
    }
    return nextIndex;
    // return Object.assign({}, state, {
    //   idx: nextIndex
    // });
  }
  if (action.type === 'receive_images') {
    return Object.assign({}, state, {
      images: action.images
    });
  }
  if (action.type === 'previous') {
    let nextIndex = state - 1;
    if (nextIndex < 0) {
      nextIndex = 5;
    }
    return nextIndex;
    // return Object.assign({}, state, {
    //   idx: nextIndex
    // });
  }
  if (action.type === 'select') {
      return action.index;
    // return Object.assign({}, state, {
    //   idx: action.index
    // });
  }
  return state;
}
