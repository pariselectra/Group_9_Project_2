const sequelize = require('../config/connection');
const { User, Prompt, Message } = require('../models/');

const userData = require('./userdata.json');
const promptData = require('./promptdata.json');
const messageData = require('./messagedata.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    for (const user of userData) {
        await User.create ({
            ...user,
        });
    }

    for (const prompt of promptData) {
        await Prompt.create ({
            ...prompt,
        });
    }

    for (const message of messageData) {
        await Message.create ({
            ...message,
        });
    }

    process.exit(0);
};

seedDatabase();