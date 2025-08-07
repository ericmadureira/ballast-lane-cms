import sequelize from './config/sequelize';
import Post from './models/post.model';
import Comment from './models/comment.model';

// Associations (order matters!)
Post.hasMany(Comment);
Comment.belongsTo(Post);

export default sequelize;
