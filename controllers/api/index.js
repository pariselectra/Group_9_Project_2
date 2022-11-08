const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const gameRoutes = require('./gameRoutes');

// router.use('/game', gameRoutes);
router.use('/users', userRoutes);

module.exports = router;