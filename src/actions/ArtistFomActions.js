export const CREATE_ARTIST = 'CREATE_ARTIST';
export const createArtist = artist => ({
  type: CREATE_ARTIST,
  payload: artist
});
