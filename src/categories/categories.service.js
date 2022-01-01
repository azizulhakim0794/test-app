const Category = require('./categories.model');

module.exports.createPost = async function (post) {
  return Category.create(post);
};

module.exports.getPosts = async function () {
  return Category.find({});
};

module.exports.getPostById = async function (postId) {
  return Category.findById(postId);
};

module.exports.updatePostById = async function (postId, update) {
  return Category.findByIdAndUpdate(postId, update, { new: true });
};

module.exports.deletePostById = async function (postId) {
  return Category.findByIdAndDelete(postId);
};
