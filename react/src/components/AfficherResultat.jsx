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

    useEffect(() => {
        if (!connecte) {
            navigate('/');
        }
    }, []);

    const token = getToken();

    useEffect(() => {
        const fetchResultats = async () => {
            const data = await getResultatQuizByUtilisateur(niveau, 3, token);
            setResultats(data);
        };
        fetchResultats();
    }, [niveau]);

    const moyenne = resultats.length > 0 
        ? resultats.reduce((acc, r) => acc + (r.nb_bonnes_reps / r.nb_questions) * 10, 0) / resultats.length 
        : 0;

    return(
        <div>
            <select value={niveau} onChange={(e) => setNiveau(parseInt(e.target.value))}>
                <option value="1">Blanche</option>
                <option value="2">Jaune</option>
                <option value="3">Orange</option>
                <option value="4">Verte</option>
                <option value="5">Bleue</option>
                <option value="6">Marron</option>
                <option value="7">Noire</option>
            </select>
            <p>Moyenne des 3 derniers quiz : {moyenne.toFixed(1)} / 10</p>
            {resultats.map((r, index) => (
                <div key={index}>
                    <p>Score : {r.nb_bonnes_reps} / {r.nb_questions}</p>
                </div>
            ))}
        </div>
    );
}