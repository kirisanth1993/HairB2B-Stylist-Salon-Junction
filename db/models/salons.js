'use strict';
module.exports = function(sequelize, DataTypes) {
  var Salons = sequelize.define('Salons', {
    userId: DataTypes.INTEGER,
    salonName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Salons;
};
