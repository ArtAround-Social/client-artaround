// import { userById } from '../services/userApi';
import { findUser } from '../services/userApi';


export const GET_USER = 'GET_USER';
export const getUser = (userSub) => ({
  type: GET_USER,
  payload: findUser({ userAuth0Id: userSub })
});
