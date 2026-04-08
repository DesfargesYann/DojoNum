const express = require('express');
const router = express.Router();
const { getQuestionsQuiz } = require('../controllers/questionController');

router.get('/quiz', getQuestionsQuiz);

module.exports = router;