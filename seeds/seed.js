const sequelize = require('../config/connection');
const { User, Prompt } = require('../models/');

const userData = require('./userdata.json');
const promptData = require('./promptdata.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const prompt of promptData) {
        await Prompt.create ({
            ...prompt,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();