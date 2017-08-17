'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stylist = sequelize.define('Stylist', {
    stylistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    jobTypeId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    condition: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stylist;
};
