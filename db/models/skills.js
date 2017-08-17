'use strict';
module.exports = function(sequelize, DataTypes) {
  var skills = sequelize.define('skills', {
    skillName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return skills;
};
