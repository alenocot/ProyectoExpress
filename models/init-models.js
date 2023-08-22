var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _lista_compras_productos = require("./lista_compras_productos");
var _productos = require("./productos");
var _shopping_lists = require("./shopping_lists");
var _supermercados = require("./supermercados");
var _users = require("./users");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var lista_compras_productos = _lista_compras_productos(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var shopping_lists = _shopping_lists(sequelize, DataTypes);
  var supermercados = _supermercados(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  productos.belongsTo(categoria, { as: "category_categorium", foreignKey: "category"});
  categoria.hasMany(productos, { as: "productos", foreignKey: "category"});
  lista_compras_productos.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "producto_id"});
  lista_compras_productos.belongsTo(shopping_lists, { as: "list", foreignKey: "list_id"});
  shopping_lists.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "list_id"});
  productos.belongsTo(supermercados, { as: "supermarket", foreignKey: "supermarket_id"});
  supermercados.hasMany(productos, { as: "productos", foreignKey: "supermarket_id"});
  shopping_lists.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(shopping_lists, { as: "shopping_lists", foreignKey: "user_id"});

  return {
    categoria,
    lista_compras_productos,
    productos,
    shopping_lists,
    supermercados,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
