import { estConnecte, getToken } from "../api/questionService";
import { useNavigate } from "react-router-dom";
import { getResultatQuizByUtilisateur } from "../api/questionService";
import { useState, useEffect } from 'react';

export default function AfficherResultat()
{
    const navigate = useNavigate();
    const connecte = estConnecte();
    const [resultats, setResultats] = useState([]);
    const [niveau, setNiveau] = useState(6); 
    const [limite, setLimite] = useState(3);

    useEffect(() => {
        if (!connecte) {
            navigate('/');
        }
    }, []);

    const token = getToken();

    useEffect(() => {
        const fetchResultats = async () => {
            const data = await getResultatQuizByUtilisateur(niveau, limite, token);
            console.log('niveau:', niveau);
            console.log('data:', data);
                console.log('token:', token);
            setResultats(data);
        };
        fetchResultats();
    }, [niveau, limite]);

    const moyenne = resultats.length > 0 
        ? resultats.reduce((acc, r) => acc + (r.nb_bonnes_reps / r.nb_questions) * 10, 0) / resultats.length 
        : 0;

    return(
    <div className="resultats-container">
        <div className="resultats-selecteurs">
            <select value={niveau} onChange={(e) => setNiveau(parseInt(e.target.value))}>
                <option value="1">Blanche</option>
                <option value="2">Jaune</option>
                <option value="3">Orange</option>
                <option value="4">Verte</option>
                <option value="5">Bleue</option>
                <option value="6">Marron</option>
                <option value="7">Noire</option>
            </select>
            <select value={limite} onChange={(e) => setLimite(parseInt(e.target.value))}>
                <option value="3">3 derniers</option>
                <option value="5">5 derniers</option>
                <option value="10">10 derniers</option>
            </select>
        </div>

        <div className="panneau-moyenne">
            <p>Moyenne des {limite} derniers : {moyenne.toFixed(1)} / 10</p>
        </div>

        {resultats.length > 0 && (
            <div className="panneau-dernier">
                <p>Dernier résultat : {resultats[0].nb_bonnes_reps} / {resultats[0].nb_questions}</p>
            </div>
        )}

        <div className="liste-resultats">
            <h2> tes derniers résultats</h2>
            {resultats.map((r, index) => (
                <div key={index} className="carte-resultat">
                    <p>Score : {r.nb_bonnes_reps} / {r.nb_questions}</p>
                </div>
            ))}
        </div>
    </div>
);
}