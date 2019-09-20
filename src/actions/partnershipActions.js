import { getUserPartnerships, postPartnership } from '../services/partnershipApi';

export const GET_PARTNERSHIPS = 'GET_PARTNERSHIPS';
export const getPartnerships = (user) => ({
  type: GET_PARTNERSHIPS,
  payload: getUserPartnerships(user)
});

export const CREATE_PARTNERSHIP = 'CREATE_PARTNERSHIP';
export const createPartnership = (currentUser, profileUser) => ({
  type: CREATE_PARTNERSHIP,
  payload: postPartnership({ artists: [currentUser, profileUser] })
});
