const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  id_question: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  enonce_question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rep_1: DataTypes.STRING,
  rep_2: DataTypes.STRING,
  rep_3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rep_4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rep_5: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rep_6: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  niveau_question: DataTypes.INTEGER,
}, {
  tableName: 'questions',
  timestamps: false,
});

module.exports = Question;