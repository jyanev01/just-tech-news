const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRouter = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRouter );

module.exports = router;
