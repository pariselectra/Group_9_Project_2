const User = require('./User');
<<<<<<< Updated upstream
const Prompt = require('./Prompt');
const Message = require('./Message');

module.exports = { User, Prompt, Message };
=======
const Project = require('./Project');

User.hasMany(prompt1, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
>>>>>>> Stashed changes
