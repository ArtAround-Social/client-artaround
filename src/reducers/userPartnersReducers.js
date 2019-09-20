import { GET_PARTNERSHIPS } from '../actions/userActions';

const initialState = {
  partners: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PARTNERSHIPS:
      return{ ...state, partners: action.payload };
    default:
      return state;
  }
}
