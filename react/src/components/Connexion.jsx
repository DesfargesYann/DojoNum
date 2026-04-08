import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Connexion()
{
        return(
        <>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }}>

        <h1>Connexion</h1>

        <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '300px',
        gap: '10px' 
         }}>
            
            <p>Email :</p>
            <input required type='email' name="Email" />

            <p>Mot de passe :</p>
            <input type='password' required name="Mdp" />
            <p></p>
            <button type="submit">Se connecter</button>
        </form>
        <button>Créer un compte</button>
        </div>
        </>)

}