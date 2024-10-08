
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Image, {
        foreignKey: 'postId',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'postId',
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
      });
      this.belongsTo(models.Street, {
        foreignKey: 'streetId',
      });
      this.belongsTo(models.House, {
        foreignKey: 'houseId',
      });
      this.belongsTo(models.Entrance, {
        foreignKey: 'entranceId',
      });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    streetId: DataTypes.INTEGER,
    houseId: DataTypes.INTEGER,
    entranceId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};