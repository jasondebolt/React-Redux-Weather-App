import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action received', action);
  switch(action.type) {
    case FETCH_WEATHER:
      // Using an array because multiple cities will appear.
      // This adds cities to our current state.
      // return state.push(action.payload.data); <-- DONT DO THIS!!!
      // Let's return a NEW array instead. Concat creates a new array.
      // return state.concat([action.payload.data]); // OK. this doesn't mutate state.

      // This does the following:
      //   1. Makes a new array
      //   2. Put the action.payload.data inside of the array.
      //   3. Append all of the entries inside of the 'state' array.
      return [ action.payload.data, ...state ]; // [ city, city, city ]

  }
  return state;
}
