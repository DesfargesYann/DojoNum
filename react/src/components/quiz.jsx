import { useState } from "react";
import {questionsJudo} from '../data/dataQuiz';

export default function Quiz()
{       
    const [BonneRep, setBonneRep] = useState(0)
    const [IndexQuestion, setIndexQuestion] = useState(0)
    const [etatQuestionnaire, setEtatQuestionnaire] = useState(true)


    function HandleReponse(reponse)
    {

        if(reponse == questionsJudo[IndexQuestion].correctAnswer)
        {
            setBonneRep(BonneRep + 1)
        }

        if(IndexQuestion + 1 < questionsJudo.length)
        {
            setIndexQuestion(IndexQuestion + 1) 
        }
        else
        {
            setEtatQuestionnaire(false)
        }
    }

    let affichage;
    if (etatQuestionnaire)
    {
        affichage =
        <>
        <NombreBonneReponse BonneRep={BonneRep}/>
        <BoutonReponse props={questionsJudo[IndexQuestion]} onClick={HandleReponse}/>
        </> 
    }
    else // Questionnaire fini
    {
        let scoreSur10 = (BonneRep / questionsJudo.length) * 10;
        let nbErreurs = questionsJudo.length - BonneRep;
        affichage = <><p>votre score est de :</p><p>{scoreSur10} sur 10</p><p>Vous avez fait {nbErreurs} erreurs</p></>
        //afficher une bouton pour revenir a la page principale
    }

    return(
        <>
        {affichage}
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
    console.log(props)
    var affichage = 
    <>
    {props.options.map((value,index) =>
    <button key={index} onClick={() => onClick(value)}>{value}</button> )}
    </>
    console.log(props.question) // éléments de la question

    return(
        <>
        <p>{props.question}</p>
        {affichage}
        </>

    )
}




