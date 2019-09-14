import { FETCH_IMAGES, FETCH_IMAGES_LOADING } from '../actions/landingPageAction';

const initialState = {
  allImages: [],
  loading: false,
  error:null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_IMAGES_LOADING:
      return{ ...state, loading: true };
    case FETCH_IMAGES:  
      return{ ...state, allImages: action.payload, loading: false };  
    default:
      return state;
  }
}
