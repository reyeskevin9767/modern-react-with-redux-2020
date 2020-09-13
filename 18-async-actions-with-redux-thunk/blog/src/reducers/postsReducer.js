// Rules of Reducers

// Must return any value besides 'undefined'

// Produces 'state' or data to be used inside app
// using only previous state and action

// Must not return reach 'out of itself' to decide what value to return
// (reducers are pure)

// Must not mutate its input 'state' argumnet

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
