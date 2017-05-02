const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  if (state === null) {
      return {
        stack: []
      };
  }
  else if (input === '-'){
      return{stack:state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]-state.stack[state.stack.length-2]])}
  }

  else if (input === '+'){
      return{stack:state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]+ state.stack[state.stack.length-2]])}
  }

  else if (input === '*'){
      return{stack:state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]*state.stack[state.stack.length-2]])}
  }

  
  // if (input === '+'){
  //     let n1 = state.stack[0];
  //     let n2 = state.stack[1];
  //     let newObject = {
  //       stack: [n1 + n2]
  //     };
  //     return newObject;
  // }else {
  //       let number = Number(input);
  //       let newArray = state.stack.concat([number]);
  //       let newObject = {
  //       stack: newArray
  //       };
  //       return newObject;
  // }
  // if(input === '-'){
  //     let n1 = state.stack[0];
  //     let n2 = state.stack[1];
  //     let newObject = {
  //         stack:newArray
  //     };
  //     return newObject;
  // }else{
  //     let number = Number(input);
  //     let newArray = state.stack.
  // }

}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
