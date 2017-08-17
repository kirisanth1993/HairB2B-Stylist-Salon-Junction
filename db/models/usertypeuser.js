'use strict';
module.exports = function(sequelize, DataTypes) {
  var userTypeUser = sequelize.define('userTypeUser', {
    userId: DataTypes.INTEGER,
    userTypeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userTypeUser;
};
