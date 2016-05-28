/**
 * Post.js
 */

module.exports = {
  attributes: {
    title: {type: 'string'},
    body: {type: 'string'},
    timestamp: {type: 'datetime'},
    comments: {model: 'Comment'}
  }
};
