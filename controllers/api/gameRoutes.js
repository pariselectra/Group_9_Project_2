const router = require('express').Router();
const { Prompt, Message } = require('../../models');

// GET route for getting a game prompt
router.get('/:id', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        // console.log(promptData);
        if (!promptData) {
            res.status(404).json({ message: 'This path is not found in the story!' });
        }
        const prompts = promptData.get({ plain: true });
        //  console.log(prompts);
        res.render('promptspage', prompts);
    } catch (err) {
        res.status(500).json(err);
    };
});

// GET route for continue game screen
router.get('/continue/:id', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        // console.log(promptData);
        if (!promptData) {
            res.status(404).json({ message: 'You might have wandered off the path' });
        }
        const prompts = promptData.get({ plain: true });
        res.render('continue', prompts);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    };
});

router.get('/cont/:id', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        // console.log(promptData);
        if (!promptData) {
            res.status(404).json({ message: 'You might have wandered off the path' });
        }
        const prompts = promptData.get({ plain: true });
        res.render('cont', prompts);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    };
});

router.get('/death/:id', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        // console.log(promptData);
        if (!promptData) {
            res.status(404).json({ message: 'You might have wandered off the path' });
        }
        const prompts = promptData.get({ plain: true });
        res.render('death', prompts);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    };
});

// GET route for game win screen
router.get('/victory', async (req, res) => {
    try {
        const gameData = await Message.findAll({
            where: {
                message_type: "victory"
            },
        });
        const gameWin = gameData.get({ plain: true });
        res.render('win page', gameWin);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;