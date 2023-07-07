// models/User.js

module.exports = (sequelize, Sequelize) => {
  User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      sourceKey: 'id',
      onDelete: 'CASCADE',
    });
    
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  }
  
  return User

}

