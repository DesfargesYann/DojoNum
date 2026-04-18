import { useState, useEffect } from "react";
import { getQuestionsQuiz } from '../api/questionService';
import ChoixNiveau from "./ChoixNiveau";


export default function Quiz({niveauQuiz = 6, setNiveauChoisi })
{       
    const [BonneRep, setBonneRep] = useState(0);
    const [IndexQuestion, setIndexQuestion] = useState(0);
    const [etatQuestionnaire, setEtatQuestionnaire] = useState(true);
    const [questions, setQuestions] = useState([]); // permet de stocker les datas qu'on récupère de l'API
    const [refresh, setRefresh] = useState(0); // va permettre de relancer l'appel de l'API dans le useEffect

    useEffect(() => {
    const fetchQuestions = async () => {
        const data = await getQuestionsQuiz(niveauQuiz); // voir pour changer le 6 quand on aura
        setQuestions(data); // on récupère les questions de l'API opur un quiz de niveau 6
    };
    fetchQuestions();
    }, [refresh]); // le refresh permet de relancer le useEffect quand il change

    function HandleReponse(reponse)
    {

        if(reponse === questions[IndexQuestion].rep_1)
        {
            setBonneRep(BonneRep + 1)
        }

        if(IndexQuestion + 1 < questions.length)
        {
            setIndexQuestion(IndexQuestion + 1) 
        }
        else
        {
            setEtatQuestionnaire(false)
        }
    }

    function HandleRelancer()
    {
        setBonneRep(0);
        setIndexQuestion(0);
        setEtatQuestionnaire(true);
        setRefresh(refresh + 1);
    }

    let affichage;
    if (questions.length === 0) // chargement en cours
    {
        affichage = <p>Chargement...</p>
    }
    else if (etatQuestionnaire)
    {
        affichage =
        <>
        <div className="panneauAffichage">
        <NombreBonneReponse BonneRep={BonneRep}/>
        </div>
        <BoutonReponse props={questions[IndexQuestion]} onClick={HandleReponse}/>
        
        </> 
    }
    else // Questionnaire fini
    {
        let scoreSur10 = (BonneRep / questions.length) * 10;
        let nbErreurs = questions.length - BonneRep;
        affichage = <><p>votre score est de :</p><p>{scoreSur10} sur 10</p><p>Vous avez fait {nbErreurs + ' '}  
        erreurs </p><RelancerQuiz onRelancer={HandleRelancer} setNiveauChoisi={setNiveauChoisi}/></>
        //afficher un bouton pour revenir a la page principale
    }

return(
    <div className="quiz-container">
        {affichage}
    </div>
)
}

export function NombreBonneReponse({BonneRep})
{

    return(
        <>
        <p>Nombre de bonne réponse : </p>
        <p>{BonneRep}</p>
        </>
    )
}

export function BoutonReponse({props, onClick})
{   
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const toutesLesOptions = [props.rep_1, props.rep_2, props.rep_3, props.rep_4, props.rep_5, props.rep_6]
            .filter(rep => rep !== null);
        
        const melange = [...toutesLesOptions].sort(() => Math.random() - 0.5);
        setOptions(melange);
    }, [props]);

    const src = '/images/' + props.niveau_question + '/' + props.image_id;
    console.log(src);

    return(
        <>
        <div className="QuestionEtImage">
        <p>{props.enonce_question}</p>
        {props.image_id && <img src={src} width="250"/>}
        </div>
        <div className="BoutonQuiz">
        {options.map((value, index) =>
            <button key={index} onClick={() => onClick(value)}>{value}</button>
        )}
        </div>        
        </>
    )
}

export function RelancerQuiz({onRelancer, setNiveauChoisi})
{
    return (
        <>
        <button onClick={onRelancer}>Relancer le quiz</button>
        <button onClick={() => setNiveauChoisi(null)}>Choisir le niveau</button>
        </>
    )
}





