import APIKit from '../APIKit';

export default {
  getAllProduct: (payload) => APIKit.post('/user/getAllProduct', payload),
  getProductById: (payload) => APIKit.post('/user/getProductById', payload),
  getProductTopImagesById: (payload) =>
    APIKit.post('/user/getProductTopImagesById', payload),

  getAllReviewbyProduct: (payload) =>
    APIKit.post('/user/getAllReviewbyProduct', payload),

  getAllReviewComments: (payload) =>
    APIKit.post('/user/GetallReviewComments', payload),

  getAllImageByProductId: (payload) =>
    APIKit.post('/user/getAllImageByProductId', payload),

  countUpVoteReview: (payload) =>
    APIKit.post('/user/countUpvotereview', payload),
  uploadProductImages: (payload) =>
    APIKit.post('/user/uploadProductImages', payload),

  countViewReview: (payload) => APIKit.post('/user/countViewReview', payload),
  countViewProduct: (payload) => APIKit.post('/user/countViewProduct', payload),

  countViewProductImage: (payload) =>
    APIKit.post('/user/countViewProductImage', payload),
  countProductImageLike: (payload) =>
    APIKit.post('/user/countProductImageLike', payload),

  insertReview: (payload) => APIKit.post('/user/insertReview', payload),
};
