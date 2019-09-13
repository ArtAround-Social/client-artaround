export const postImage = (image) => {
  return fetch(`${process.env.API_URL}/api/v1/files`, {
    method: 'POST',
    body: JSON.stringify({ image }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not upload the image';
      return res.json();
    });
};
