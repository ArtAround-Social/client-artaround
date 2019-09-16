import { CREATE_ARTIST } from '../actions/ArtistFomActions';

const initialState = {
  artist: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_ARTIST:
      return{ ...state, artist: action.payload };
    default:
      return state;
  }
}
