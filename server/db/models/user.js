
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
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
      this.belongsTo(models.Appartament, {
        foreignKey: 'appartId',
      });
      this.hasMany(models.Post, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'userId',
      });
      this.hasMany(models.ChatMessage, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    streetId: DataTypes.INTEGER,
    houseId: DataTypes.INTEGER,
    entranceId: DataTypes.INTEGER,
    appartId: DataTypes.INTEGER,
    img: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};