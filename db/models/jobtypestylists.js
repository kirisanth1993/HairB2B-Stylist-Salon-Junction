'use strict';
module.exports = function(sequelize, DataTypes) {
  var jobTypeStylists = sequelize.define('jobTypeStylists', {
    stylistId: DataTypes.INTEGER,
    jobTypeId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobTypeStylists;
};
