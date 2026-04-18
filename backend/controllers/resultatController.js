const Resultat = require('../models/Resultats');
const sequelize = require('../config/db');

const getResultatQuizByUtilisateur = async (req , res) => {
    try{
        const id_utilisateur = req.utilisateur.id;
        const niveau_quiz = parseInt(req.query.niveau_quiz) || 5;
        const limite =  parseInt(req.query.limite) || 3 ;

        const resultat = await Resultat.findAll(
            {
                where: {
                    id_utilisateur: id_utilisateur,
                    niveau_quiz: niveau_quiz,
                },
                limit: limite,
                order: [['id_resultat', 'DESC']]
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
            nb_bonnes_reps,
            nb_questions,
            niveau_quiz,
        } = req.body;

        const resultat = await Resultat.create(
            {
                id_utilisateur:  req.utilisateur.id,
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