'use strict';
module.exports = function(sequelize, DataTypes) {
  var userType = sequelize.define('userType', {
    userType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userType;
};
