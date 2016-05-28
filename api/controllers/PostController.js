/**
 * PostController
 */

module.exports = {
  getPostsWithComments: function (req, res) {
    PostService.getPostsWithComments()
      .then(function (posts) {
        res.ok(posts);
      })
      .catch(res.negotiate);
  }
};
