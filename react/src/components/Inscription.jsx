import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';


export default function Inscription()
{
    return (
        <>

{/*             <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            >
        
            <TextField
            required
            type='email'
            id="outlined-required"
            label="Obligatoire"
            defaultValue="Email"
            />

            <TextField
            id="filled-password-input"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
            </Box> */}

        <h1>Inscription</h1>
        <form >
            <p>Email :</p>
            <input required type='email' name="Email" />
            <p>Nom :</p>
            <input required name="Nom" />
            <p>Prénom :</p>
            <input required name="Prenom" />
            <p>Grade</p>
            <select >
                <option value="1">Ceinture Blanche</option>
                <option value="2">Ceinture Jaune</option>
                <option value="3">Ceinture Orange</option>
                <option value="4">Ceinture Verte</option>
                <option value="5">Ceinture Bleue</option>
                <option value="6">Ceinture Marron</option>
                <option value="7">Ceinture Noire</option>
            </select>
            <p>Mot de passe :</p>
            <input type='password' required name="Mdp" />
            <p>Valider le mot de passe :</p>
            <input required type='password' name="VerifMdp" />
            <button type="submit">S'inscrire</button>
            <p>test</p>
            <p>test</p>
        </form>
        </>
    )
}