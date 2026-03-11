import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Connexion()
{
        return(
        <>
        <h1>Connexion</h1>
        <form >
            <p>Email :</p>
            <input required type='email' name="Email" />

            <p>Mot de passe :</p>
            <input type='password' required name="Mdp" />
            <p></p>
            <button type="submit">Se connecter</button>
        </form>
        <button>Créer un compte</button>
        </>)

}