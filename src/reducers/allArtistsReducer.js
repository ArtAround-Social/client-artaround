import { GET_ARTISTS } from '../actions/allArtistsActions';

const initialState = {
  allartists: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ARTISTS:
      return{  ...state, allartists: action.payload };
    default:
      return state;
  } 
}
