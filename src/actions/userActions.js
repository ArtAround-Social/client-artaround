import { userById } from '../services/userApi';

export const GET_USER = 'GET_USER';
export const getUser = (user) => dispatch => {
  return userById(user)
    .then(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
    });
};
