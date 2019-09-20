
// export const getImages = state => state.landingPageReducer.allImages;
// export const getImagesLoading = state => state.landingPageReducer.loading;

export const getAccountType = state => state.user.user.account_type;
export const getAccountName = state => state.user.user.name;

export const getCurrentUser = state => state.user.user;
export const getUserImages = state => state.userImages.images;
export const getUserPartners = state => state.userPartners.partners;

export const getInvites = state => state.invites.invites;

export const getProfileImages = state => state.profileImages.images;
export const getProfilePartners = state => state.profilePartners.partners;

export const getArtistInfoUser = state => state.artistInfo.user;

export const getGalleryName = state => state.galleryInfo.profileInfo.galleryName;
export const getGalleryLocation = state => state.galleryInfo.profileInfo.galleryLocation;
export const getGalleryStyles = state => state.galleryInfo.profileInfo.styles;
export const getGalleryRules = state => state.galleryInfo.profileInfo.rules;
export const getGalleryOwner = state => state.galleryInfo.profileInfo.owner;
export const getGalleryPhone = state => state.galleryInfo.profileInfo.phone;
export const getGalleryEmail = state => state.galleryInfo.profileInfo.email;


export const getAllArtists = state => state.allArtists.allartists;




