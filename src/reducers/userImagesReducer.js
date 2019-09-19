import { GET_IMAGES } from '../actions/userActions';

const initialState = {
  images: [
    { id: 1253, url: 'https://www.goodfreephotos.com/albums/people/man-sitting-on-the-beach-monochrome.jpg' },
    { id: 1243, url: 'https://www.goodfreephotos.com/albums/people/dancing-maidens-by-a-tree.jpg' },
    { id: 1233, url: 'https://www.goodfreephotos.com/albums/people/guitar-player-playing-the-guitar.jpg' },
    { id: 1223, url: 'https://www.goodfreephotos.com/albums/people/troop-of-soldiers-across-the-snow.jpg' },
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_IMAGES:
      return{ ...state, images: action.payload };
    default:
      return state;
  } 
}
