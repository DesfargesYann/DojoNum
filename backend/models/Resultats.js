const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Resultats = sequelize.define( 'Resultats', 
    {
        id_resultat : 
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_utilisateur :
        {
            type: DataTypes.INTEGER,
        },
        nb_bonnes_reps : 
        {
            type: DataTypes.INTEGER,
        },
        nb_questions:
        {
            type : DataTypes.INTEGER,
        },
        niveau_quiz : 
        {
            type: DataTypes.INTEGER,
        }
    },
  {
    tableName: 'resultats',
    timestamps: false,
});

module.exports = Resultats;