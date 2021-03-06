const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRouter = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRouter );
router.use('/comments', commentRoutes);

module.exports = router;
