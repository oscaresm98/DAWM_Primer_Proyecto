const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('album', {
    album_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    artistas_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'artistas',
        key: 'artistas_id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    num_canciones: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'album',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
      {
        name: "fkArtistasCanciones",
        using: "BTREE",
        fields: [
          { name: "artistas_id" },
        ]
      },
    ]
  });
};
