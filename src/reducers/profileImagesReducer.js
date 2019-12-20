
const initialState = {
  images: [
    { id: 1243, imgUrl: 'https://www.goodfreephotos.com/cache/other-landscapes/painting-of-forest-and-pond_200_w200_h200_cw200_ch200_thumb.jpg?cached=1558105927' },
    { id: 1233, imgUrl: 'https://www.goodfreephotos.com/cache/other-landscapes/waterfall-landscape-in-nature_200_w200_h200_cw200_ch200_thumb.jpg?cached=1558012526' },
    { id: 1223, imgUrl: 'https://www.goodfreephotos.com/cache/united-states/maryland/antietam-battlefield/battle-of-antietam-illustration-maryland_200_w200_h200_cw200_ch200_thumb.png?cached=1564661584' },
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  } 
}
