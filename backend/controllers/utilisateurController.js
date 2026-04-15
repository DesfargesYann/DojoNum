const Utilisateur = require('../models/Utilisateurs');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

const createUtilisateur = async (req, res) => {
  try {
    const { 
      email,
      nom,
      prenom,
      ceinture,
      password,
    } = req.body // on récupère les éléments de la req 

    const PasswordHashe = await bcrypt.hash(password, 10); // permet de hashé le mdp avec une sécur de 10

    const utilisateur = await Utilisateur.create({
      email: email,
      nom: nom,
      prenom: prenom,
      ceinture: ceinture,
      password : PasswordHashe,
    })

    res.status(201).json(utilisateur);
  }
  catch (error)
  {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }

};

const loginUtilisateur = async(req, res) => {
  try{
    const email = req.body.email;
    const passwordRecup = req.body.password

    const utilisateur = await Utilisateur.findOne(
      {
      where: {
        email: email,
      }
      }
    )

    const passwordBDD = utilisateur.password;
    const comparaison = await bcrypt.compare(passwordRecup, passwordBDD);

    if (!utilisateur)
      {
        return res.status(404).json({message: 'Utilisateur non trouvé'});
        //return pour stopper
      }
    if (comparaison)
      {
        res.status(200).json(utilisateur);    
      }
    else
      {
        res.status(403);
      }
  }
  catch(error){
    res.status(500).json( {message: 'Erreur serveur', error: error.message} )
  }
}

module.exports = { createUtilisateur, loginUtilisateur };