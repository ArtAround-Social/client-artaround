import { ADD_USER_BY_ID } from '../actions/userActions';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER_BY_ID:
      console.log('REDUCER LOG ####', action.payload);
      return({ user: action.payload });
    default:
      return state;
  }
}
