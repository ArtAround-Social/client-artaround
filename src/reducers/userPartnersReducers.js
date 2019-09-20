import { GET_PARTNERSHIPS } from '../actions/partnershipActions';
import { CREATE_PARTNERSHIP } from '../actions/partnershipActions';

const initialState = {
  partners: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PARTNERSHIPS:
      return{ ...state, partners: action.payload };
    case CREATE_PARTNERSHIP:
      return{ ...state, partners: action.payload };
    default:
      return state;
  }
}
