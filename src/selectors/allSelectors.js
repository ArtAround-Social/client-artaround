export const getImages = state => state.landingPageReducer.allImages;
export const getImagesLoading = state => state.landingPageReducer.loading;

export const getAccountType = state => state.user.user.account_type;
export const getAccountName = state => state.user.user.name;
