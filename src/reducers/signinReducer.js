import { SIGNIN } from '../actions/landingPageAction';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SIGNIN:
      return{ ...state, user: action.payload };
    default:
      return state;
  }
}
