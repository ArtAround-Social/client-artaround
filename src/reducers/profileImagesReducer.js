
const initialState = {
  images: [
    { id: 1243, imgUrl: 'https://www.goodfreephotos.com/albums/people/dancing-maidens-by-a-tree.jpg' },
    { id: 1233, imgUrl: 'https://www.goodfreephotos.com/albums/people/guitar-player-playing-the-guitar.jpg' },
    { id: 1223, imgUrl: 'https://www.goodfreephotos.com/albums/people/troop-of-soldiers-across-the-snow.jpg' },
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  } 
}
