
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'streetId',
      });
      this.hasMany(models.Post, {
        foreignKey: 'streetId',
      });
      this.hasMany(models.InfoBoard, {
        foreignKey: 'streetId',
      });
      this.hasMany(models.House, {
        foreignKey: 'streetId',
      });
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
      })
    }
  }
  Street.init({
    name: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Street',
  });
  return Street;
};