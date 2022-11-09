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

// PUT route to update users death count
// router.put('/:id', async (req, res) => {
//   try {
//     const currentDeathCount = await User.get(deaths);
//     console.log(currentDeathCount);
//     currentDeathCount++;
//     res.status(200).json(currentDeathCount);
//   } catch (err) {
//     res.status(404).json(err);
//   }
// });

// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Bad username or password.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Bad username or password.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Logged into Survival' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;