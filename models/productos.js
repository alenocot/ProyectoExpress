const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    PK_producto_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'PK_categoria_id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    barcode: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    supermarket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supermercados',
        key: 'PK_supermarket_id'
      }
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_producto_id" },
        ]
      },
      {
        name: "supermarket_id",
        using: "BTREE",
        fields: [
          { name: "supermarket_id" },
        ]
      },
      {
        name: "category",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};
