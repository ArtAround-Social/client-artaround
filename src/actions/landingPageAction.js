import { getAllImages } from '../services/allImagesCall';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGES_LOADING = 'FETCH_IMAGES_LOADING';

export const fetchImages = () => ({
  type: FETCH_IMAGES,
  payload: getAllImages(),
  pendingType: FETCH_IMAGES_LOADING 
});
