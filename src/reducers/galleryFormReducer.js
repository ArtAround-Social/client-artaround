import { CREATE_GALLERY } from '../actions/GalleryFormActions';

const initialState = {
  gallery: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_GALLERY:
      return{ ...state, gallery: action.payload };
    default:
      return state;
  }
}
