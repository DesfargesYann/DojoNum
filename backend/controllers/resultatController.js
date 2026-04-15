const Resultat = require('../models/Resultats');
const sequelize = require('../config/db');


// A CHANGER POUR L ID DANS L'URL
const getResultatQuizByUtilisateur = async (req , res) => {
    try{
        const id_utilisateur = parseInt(req.params.id_utilisateur);
        const niveau_quiz = parseInt(req.params.niveau_quiz) || 5;
        const limite =  parseInt(req.params.limite) || 3 ;

        const resultat = await Resultat.findAll(
            {
                where: {
                    id_utilisateur: id_utilisateur,
                    niveau_quiz: niveau_quiz,
                },
                limit: limite,
            }
        )
        res.status(200).json(resultat)
    }
    catch(error){
        res.status(500).json({message: 'Erreur serveur', error: error.message});
    }
}

const createResultat = async (req, res) => 
{
    try{
        const {
            id_utilisateur,
            nb_bonnes_reps,
            nb_questions,
            niveau_quiz,
        } = req.body;

        const resultat = await Resultat.create(
            {
                id_utilisateur:  id_utilisateur,
                nb_bonnes_reps : nb_bonnes_reps,
                nb_questions: nb_questions,
                niveau_quiz : niveau_quiz,
            }
        )
        res.status(201).json(resultat);
    }
    catch(error)
    {
        res.status(500).json({message: 'Erreur serveur', error: error.message});
    }
};

module.exports= {createResultat, getResultatQuizByUtilisateur};