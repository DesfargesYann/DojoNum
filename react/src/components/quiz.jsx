import { useState, useEffect } from "react";
import {questionsJudo} from '../data/dataQuiz'; // pour locacl

import { getQuestionsQuiz } from '../api/questionService';

export default function Quiz()
{       
    const [BonneRep, setBonneRep] = useState(0);
    const [IndexQuestion, setIndexQuestion] = useState(0);
    const [etatQuestionnaire, setEtatQuestionnaire] = useState(true);
    const [questions, setQuestions] = useState([]); // permet de stocker les datas qu'on récupère de l'API
    const [refresh, setRefresh] = useState(0); // va permettre de relancer l'appel de l'API dans le useEffect

    useEffect(() => {
    const fetchQuestions = async () => {
        const data = await getQuestionsQuiz(6); // voir pour changer le 6 quand on aura
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

    function RelancerQuiz()
    {
        function HandleChange() // function simple pour relancer le quiz sur la V1
        {
            setBonneRep(0);
            setIndexQuestion(0);
            setEtatQuestionnaire(true);
            setRefresh(refresh + 1); // refresh change donc on rappel useEffect
        }

        return(
            <><button onClick={HandleChange}>Relancer le quiz</button></>
        )
    }

    let affichage;
    if (questions.length === 0) // chargement en cours
    {
        affichage = <p>Chargement...</p>
    }
    else if (etatQuestionnaire)
    {
        console.log(questions)
        affichage =
        <>
        <NombreBonneReponse BonneRep={BonneRep}/>
        <BoutonReponse props={questions[IndexQuestion]} onClick={HandleReponse}/>
        </> 
    }
    else // Questionnaire fini
    {
        let scoreSur10 = (BonneRep / questions.length) * 10;
        let nbErreurs = questions.length - BonneRep;
        affichage = <><p>votre score est de :</p><p>{scoreSur10} sur 10</p><p>Vous avez fait {nbErreurs}  
        erreurs </p><RelancerQuiz/></>
        //afficher une bouton pour revenir a la page principale
    }

    return(
        <>
        {affichage}
        <p>test</p>
        <p>test</p>
        <p>test</p>
        </>
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
    const options = [props.rep_1, props.rep_2, props.rep_3, props.rep_4, props.rep_5, props.rep_6]
        .filter(rep => rep !== null);
    const src = '/images/' + props.image_id;
    return(
        <>
        <p>{props.enonce_question}</p>
        <img src={src} width="250"/>
        {options.map((value, index) =>
            <button key={index} onClick={() => onClick(value)}>{value}</button>
        )}
        </>
    )
}






