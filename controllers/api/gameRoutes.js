const router = require('express').Router();
const { Prompt } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        if (!promptData) {
            res.status(404).json({ message: 'This path is not found in the story!' });
        }
        const stage = promptData.get({ plain: true });
        res.render('gamePagePlaceholder', stage);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;