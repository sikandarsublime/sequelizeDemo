'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admin_roles.hasMany(models.admin_users,{
        foreignKey:'id'
      });
      admin_roles.hasMany(models.admin_roles_policies,{
        foreignKey:'id'
      });
    }
  };
  admin_roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin_roles',
  });
  return admin_roles;
};

// admin_roles.users=admin_roles.hasMany(admin_users);
// admin_roles.policies=admin_roles.hasMany(admin_roles_p/olicies);
