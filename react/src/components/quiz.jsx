import { useState } from "react";

export default function Quiz()
{       
    const [BonneRep, setBonneRep] = useState(0)
    const [IndexQuestion, setIndexQuestion] = useState(0)

    function HandleReponse(reponse)
    {
        console.log("L'utilisateur a cliqué sur :", reponse);
        console.log(questionsJudo[IndexQuestion].correctAnswer)
        if(reponse == questionsJudo[IndexQuestion].correctAnswer)
        {
            setBonneRep(BonneRep + 1)
        }
        if(IndexQuestion + 1 < questionsJudo.length)
        {
            setIndexQuestion(IndexQuestion + 1) // voir pour gérer le cas ou on dépasse
        }
    }

    console.log(IndexQuestion)
    return(
        <>
        <NombreBonneReponse BonneRep={BonneRep}/>
        <BoutonReponse props={questionsJudo[IndexQuestion]} onClick={HandleReponse}/>
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
    console.log(props.question)
    return(
        <>
        <p>{props.question}</p>
        <button onClick={() => onClick(props.options[0])}>{props.options[0]}</button>
        <button onClick={() => onClick(props.options[1])}>{props.options[1]}</button>
        <button onClick={() => onClick(props.options[2])}>{props.options[2]}</button>
        <button onClick={() => onClick(props.options[3])}>{props.options[3]}</button>
        </>
    )
}



const questionsJudo = [
  {
    id: 1,
    question: "Comment appelle-t-on le professeur de Judo ?",
    options: ["Sempai", "Sensei", "Tori", "Uke"],
    correctAnswer: "Sensei"
  },
  {
    id: 2,
    question: "Quelle est la couleur de la ceinture après la blanche ?",
    options: ["Jaune", "Orange", "Verte", "Bleue"],
    correctAnswer: "Jaune"
  },
  {
    id: 3,
    question: "Que signifie le mot 'Judo' ?",
    options: ["Voie de la souplesse", "Art du combat", "Esprit de groupe", "Énergie vitale"],
    correctAnswer: "Voie de la souplesse"
  }
];
