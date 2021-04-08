'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admin_users.belongsTo(models.admin_roles,{
        foreignKey:"role_id",
        onDelete:null,
      });
    }
  };
  admin_users.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'admin_users',
  });
  return admin_users;
};

// admin_users.roles=admin_users.belongsTo(admin_roles);
