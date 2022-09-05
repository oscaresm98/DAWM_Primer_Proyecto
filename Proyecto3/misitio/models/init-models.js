var DataTypes = require("sequelize").DataTypes;
var _album = require("./album");
var _artistas = require("./artistas");
var _canciones = require("./canciones");

function initModels(sequelize) {
  var album = _album(sequelize, DataTypes);
  var artistas = _artistas(sequelize, DataTypes);
  var canciones = _canciones(sequelize, DataTypes);

  canciones.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(canciones, { as: "canciones", foreignKey: "album_id"});
  album.belongsTo(artistas, { as: "artista", foreignKey: "artistas_id"});
  artistas.hasMany(album, { as: "albums", foreignKey: "artistas_id"});

  return {
    album,
    artistas,
    canciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
