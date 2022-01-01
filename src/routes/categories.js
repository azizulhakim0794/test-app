const express = require('express');
const router = express.Router();
const categoryController = require('../categories/categories.controller');
// const userController = require('../user/user.controller');
// const postMiddleware = require('../posts/posts.middleware');
router.post('/posts', categoryController.createPosts);
router.get('/posts', categoryController.getPosts);
router.get('/posts/:id', categoryController.getPostById);
router.put('/posts/:id', categoryController.updatePostById);
router.delete('/posts/:id', categoryController.deletePostById);

module.exports = router;
