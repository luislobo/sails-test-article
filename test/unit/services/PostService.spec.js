/* global PostService */

// Here is were we init our 'sails' environment and application
require('../../bootstrap');

// Here we have our tests
describe('The PostService', function () {

  before(function (done) {
    Post.create({})
      .then(Post.create({})
        .then(Post.create({})
          .then(function () {
            done();
          })
        )
      );
  });

  it('should return all posts with their comments', function (done) {
    PostService
      .getPostsWithComments()
      .then(function (posts) {
        posts.should.be.an('array');
        posts.should.have.length(3);
        done();
      })
      .catch(done);

  });

});
