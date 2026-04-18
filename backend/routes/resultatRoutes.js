const express = require('express');
const router = express.Router();
const { getResultatQuizByUtilisateur, createResultat } = require('../controllers/resultatController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/', authMiddleware, getResultatQuizByUtilisateur);
router.post('/', authMiddleware, createResultat);

module.exports = router;