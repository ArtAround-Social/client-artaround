export const getAllImages = () => {
  return fetch('https://picsum.photos/v2/list')
    .then(res => {
      if(!res.ok) throw 'can not get all images';
      console.log(res);
      
      return res.json();
      
    });
};
