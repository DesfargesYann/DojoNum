import Footer from "../components/Footer"
import Quiz from "../components/quiz"
import Header from "../components/Header"
import { useState } from "react"
import ChoixNiveau from "../components/ChoixNiveau"

export function PageQuiz()
{
    const [niveauChoisi, setNiveauChoisi] = useState(null);

    return(
        <>
        <Header/>
        <AffichageQuiz niveauChoisi={niveauChoisi} setNiveauChoisi={setNiveauChoisi}/>
        <Footer/>
        </>
    )
}

export function AffichageQuiz({niveauChoisi, setNiveauChoisi})
{
    if (niveauChoisi === null)
    {
        return ( <ChoixNiveau setNiveauChoisi={setNiveauChoisi}/>)
    }
    else
    {
        return (<Quiz niveauQuiz={niveauChoisi} setNiveauChoisi={setNiveauChoisi}/>)
    }
}