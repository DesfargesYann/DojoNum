export default function ChoixNiveau({setNiveauChoisi})
{
    return(
        <>
        <button onClick={() => setNiveauChoisi(1)}> Ceinture blanche</button>
        <button onClick={() => setNiveauChoisi(6)}> Ceinture marron</button>
        </>
    )
}