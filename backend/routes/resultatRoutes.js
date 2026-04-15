const express = require('express');
const router = express.Router();
const { getResultatQuizByUtilisateur, createResultat } = require('../controllers/resultatController');

router.get('/:id_utilisateur', getResultatQuizByUtilisateur);
router.post('/', createResultat);

module.exports = router;