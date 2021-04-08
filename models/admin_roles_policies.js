'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_roles_policies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admin_roles_policies.belongsTo(models.admin_roles,{
        foreignKey:'role_id'
      });
    }

  };
  admin_roles_policies.init({
    name: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'admin_roles_policies',
  });
  return admin_roles_policies;
};

// admin_roles_policies.roles=admin_roles_policies.belongsTo(admin_roles);