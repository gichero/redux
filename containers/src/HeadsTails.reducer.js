const INITIAL_STATE = {
    flip: false
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'flip') {
    if (action.value > 0.5) {
      return true;
    } else {
      return false;
    }
  } else {
    return state;
  }
}
