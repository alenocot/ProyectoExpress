const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lista_compras_productos', {
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shopping_lists',
        key: 'PK_list_id'
      }
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'PK_producto_id'
      }
    }
  }, {
    sequelize,
    tableName: 'lista_compras_productos',
    timestamps: false,
    indexes: [
      {
        name: "list_id",
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
      {
        name: "producto_id",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
    ]
  });
};
