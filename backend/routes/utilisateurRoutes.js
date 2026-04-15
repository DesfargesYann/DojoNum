const express = require('express');
const router = express.Router();
const { createUtilisateur, loginUtilisateur } = require('../controllers/utilisateurController');

router.post('/', createUtilisateur);
router.post('/login', loginUtilisateur);

module.exports = router;