import { GET_AUTH_USER } from '../actions/userActions';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_AUTH_USER:
      return{ ...state, user: action.payload };
    default:
      return state;
  }
}
