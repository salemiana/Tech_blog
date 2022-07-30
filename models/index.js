const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasmany(Post, { foreignKey: 'user_id' });

Post.belongsTo(User, { foreignKey: 'user_id' });

Comment.belongsTo(User, { foreignKey: 'user_id' });

Comment.belongsTo(Post, { foreignKey: 'post_id' });

User.hasmany(Comment, { foreignKey: 'user_id' });

Post.hasmany(Comment, { foreignKey: 'post_id' });

module.exports = { User, Comment, Post}

