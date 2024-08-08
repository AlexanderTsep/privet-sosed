
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InfoBoard extends Model {
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
    }
  }
  InfoBoard.init({
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    streetId: DataTypes.INTEGER,
    houseId: DataTypes.INTEGER,
    entranceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InfoBoard',
  });
  return InfoBoard;
};