import { findUserByAuthId, userById } from '../services/userApi';


export const GET_AUTH_USER = 'GET_AUTH_USER';
export const getAuthUser = (userSub) => ({
  type: GET_AUTH_USER,
  payload: findUserByAuthId({ userAuth0Id: userSub })
});

export const ADD_USER_BY_ID = 'ADD_USER_BY_ID';
export const addUserById = (userId) => ({
  type: ADD_USER_BY_ID,
  payload: userById({ userId })
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
