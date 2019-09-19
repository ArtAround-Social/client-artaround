import { allArtists } from '../services/userApi';

export const GET_ARTISTS = 'GET_ARTISTS';
export const getArtists = () => ({
  type: GET_ARTISTS,
  payload: allArtists()
});
