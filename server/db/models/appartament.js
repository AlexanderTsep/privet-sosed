
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appartament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'appartId',
      });
      this.belongsTo(models.Entrance, {
        foreignKey: 'entranceId',
      });
    }
  }
  Appartament.init({
    number: DataTypes.INTEGER,
    entranceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appartament',
  });
  return Appartament;
};