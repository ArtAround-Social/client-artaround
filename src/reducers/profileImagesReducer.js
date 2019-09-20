
const initialState = {
  images: [
    { id: '', imgUrl: '' }
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  } 
}
