import { findUser, userImages } from '../services/userApi';
import { getUserPartnerships } from '../services/partnershipApi';
// import { postImage } from '../services/fileApi';

export const GET_USER = 'GET_USER';
export const getUser = (userSub) => ({
  type: GET_USER,
  payload: findUser({ userAuth0Id: userSub })
});

export const GET_IMAGES = 'GET_IMAGES';
export const getImages = (user) => ({
  type: GET_IMAGES,
  payload: userImages(user)
});

export const GET_PARTNERSHIPS = 'GET_PARTNERSHIPS';
export const getPartnerships = (user) => ({
  type: GET_PARTNERSHIPS,
  payload: getUserPartnerships(user)
}); 

// export const UPDATE_IMAGES = 'UPDATE_IMAGES';
// export const updateImages = (user) => ({
//   type: UPDATE_IMAGES,
//   payload: postImage(user)
// });
