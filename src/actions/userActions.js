import { findUserByAuthId, userById, userImages } from '../services/userApi';

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

export const ADD_ARTIST_INFO = 'ADD_ARTIST_INFO';
export const addArtistInfo = (userId) => ({
  type: ADD_ARTIST_INFO,
  payload: userById({ userId })
});

export const GET_IMAGES = 'GET_IMAGES';
export const getImages = (user) => ({
  type: GET_IMAGES,
  payload: userImages(user)
});
