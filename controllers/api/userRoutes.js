const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    const user = userData.get(({ plain: true}));
    res.render('user');
  } catch (err) {
    res.status(404).json({ message: 'No user with this id.'});
  }
})

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

    res.status(200).json(userData);  
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const newUserDeath = await User.update(
      deaths++
    );

  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;