import { GET_ARTISTS } from '../actions/allArtistsActions';

const initialState = {
  allartists: [
    { id: 1253, name: 'pavel', imgUrl: 'https://www.goodfreephotos.com/albums/people/man-sitting-on-the-beach-monochrome.jpg' },
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ARTISTS:
      return{  ...state, allartists: action.payload };
    default:
      return state;
  } 
}
