// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const questionRoutes = require('./routes/questionRoutes');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const resultatRoutes = require('./routes/resultatRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api/questions', questionRoutes);
app.use('/api/utilisateur', utilisateurRoutes);
app.use('/api/resultat', resultatRoutes);


sequelize.authenticate()
  .then(() => {
    console.log('Connexion MariaDB OK');
    app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
  })
  .catch((err) => {
    console.error('Connexion BDD échouée :', err.message);
  });