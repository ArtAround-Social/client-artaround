import { ADD_ARTIST_INFO } from '../actions/userActions';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ARTIST_INFO:
      return({ ...state, user: action.payload });
    default:
      return state;
  }
}
