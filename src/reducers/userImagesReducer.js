import { GET_IMAGES } from '../actions/userActions';

const initialState = {
  images: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_IMAGES:
      return{ ...state, images: action.payload };
    // case UPDATE_IMAGES:
    //   return{ ...state, images: action.payload };
    default:
      return state;
  } 
}
