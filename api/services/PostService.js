/**
 * PostService
 *
 * @description :: Service that handles posts
 */

module.exports = {
  getPostsWithComments: function () {
    return Post
      .find()
      .populate('comments');
  }
};
