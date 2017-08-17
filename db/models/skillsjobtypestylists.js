'use strict';
module.exports = function(sequelize, DataTypes) {
  var skillsJobTypeStylists = sequelize.define('skillsJobTypeStylists', {
    stylistId: DataTypes.INTEGER,
    jobTypeId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return skillsJobTypeStylists;
};
