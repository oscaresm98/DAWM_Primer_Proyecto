const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canciones', {
    cancion_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    album_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'album',
        key: 'album_id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'canciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cancion_id" },
        ]
      },
      {
        name: "fkAlbumCanciones",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
    ]
  });
};
