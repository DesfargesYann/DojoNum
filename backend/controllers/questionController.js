const Question = require('../models/Question');
const sequelize = require('../config/db');

const getQuestionsQuiz = async (req, res) => {
  try {
    const niveau = parseInt(req.query.niveau);
    const limite = parseInt(req.query.limite) || 10;

    const questions = await Question.findAll({
      where: { niveau_question: niveau },
      order: sequelize.literal('RAND()'),  // ordre aléatoire côté SQL
      limit: limite,
    });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

module.exports = { getQuestionsQuiz };