// models/Post.js

module.exports = (sequelize, Sequelize) => {
  Post = sequelize.define('Post', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Post

}
