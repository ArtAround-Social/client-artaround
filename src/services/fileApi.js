export const postImage = (file, id, type) => {
  const data = new FormData();
  data.append('photo', file);
  data.append('id', id);
  return fetch(`${process.env.API_URL}/api/v1/files/${type}`, {
    method: 'POST',
    body: data
  })
    .then(res => {
      if(!res.ok) throw 'Could not upload the image';
      return res.json();
    });
};
