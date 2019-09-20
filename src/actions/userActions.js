// import { userById } from '../services/userApi';
import { findUserByAuthId, userById } from '../services/userApi';


export const GET_AUTH_USER = 'GET_AUTH_USER';
export const getAuthUser = (userSub) => ({
  type: GET_AUTH_USER,
  payload: findUserByAuthId({ userAuth0Id: userSub })
});

export const ADD_USER_BY_ID = 'ADD_USER_BY_ID';
export const addUserById = (userId) => {
  userById({ userId }).then(res => console.log('ACTION ####', typeof res));
  return({
    type: ADD_USER_BY_ID,
    payload: userById({ userId })
  });
};
