import { findUser, userImages } from '../services/userApi';
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

// export const UPDATE_IMAGES = 'UPDATE_IMAGES';
// export const updateImages = (id, type) => ({
//   type: UPDATE_IMAGES,
//   payload: postImage(id, type)
// });
