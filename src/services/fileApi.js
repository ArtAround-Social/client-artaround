export const postImage = (file, artist) => {
  const data = new FormData();
  data.append('photo', file);
  data.append('artistId', artist);
  return fetch(`${process.env.API_URL}/api/v1/files/artwork`, {
    method: 'POST',
    body: data
  })
    .then(res => {
      if(!res.ok) throw 'Could not upload the image';
      return res.json();
    });
};
