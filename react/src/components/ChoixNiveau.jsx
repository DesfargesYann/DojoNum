export default function ChoixNiveau({setNiveauChoisi})
{
    return(
        <div className="choix-niveau-container">
            <button className="btn-ceinture btn-blanche" onClick={() => setNiveauChoisi(1)}>Ceinture blanche</button>
            <button className="btn-ceinture btn-jaune" onClick={() => setNiveauChoisi(2)}>Ceinture jaune</button>
            <button className="btn-ceinture btn-orange" onClick={() => setNiveauChoisi(3)}>Ceinture orange</button>
            <button className="btn-ceinture btn-verte" onClick={() => setNiveauChoisi(4)}>Ceinture verte</button>
            <button className="btn-ceinture btn-bleue" onClick={() => setNiveauChoisi(5)}>Ceinture bleue</button>
            <button className="btn-ceinture btn-marron" onClick={() => setNiveauChoisi(6)}>Ceinture marron</button>
            <button className="btn-ceinture btn-noire" onClick={() => setNiveauChoisi(7)}>Ceinture noire</button>
        </div>
    )
}