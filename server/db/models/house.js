
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'houseId',
      });
      this.hasMany(models.Post, {
        foreignKey: 'houseId',
      })
      this.hasMany(models.InfoBoard, {
        foreignKey: 'houseId',
      });
      this.hasMany(models.Entrance, {
        foreignKey: 'houseId',
      })
      this.belongsTo(models.Street, {
        foreignKey: 'streetId',
      });
    }
  }
  House.init({
    number: DataTypes.STRING,
    streetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};