'use strict';
module.exports = function(sequelize, DataTypes) {
  var jobType = sequelize.define('jobType', {
    typeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobType;
};
