const categoryService = require('./categories.service');

module.exports.createPosts = async function (req, res) {
  const post = req.body;
  const createdPost = await categoryService.createPost(post);
  return res.status(200).json(createdPost);
};

module.exports.getPosts = async function (req, res) {
  const posts = await categoryService.getPosts();
  return res.json(posts);
};

module.exports.getPostById = async function (req, res) {
  const postId = req.params.id;
  const post = await categoryService.getPostById(postId);
  return res.json(post);
};

module.exports.updatePostById = async function (req, res) {
  const postId = req.params.id;
  const update = req.body;
  const post = await categoryService.updatePostById(postId, update);
  return res.json(post);
};
module.exports.deletePostById = async function (req, res) {
  const postId = req.params.id;
  const post = await categoryService.deletePostById(postId);
  return res.json(post);
};
