import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Post from './post.model';

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

export default Comment;
