import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { useState } from 'react';

export default function Inscription()
{
    const [formData, setFormData] = useState({
        Nom: '',
        Prenom: '',
        Email: '',
        Grade: '1', 
        Mdp: '',
        VerifMdp: ''})


        const handleSubmit = (e) => {
            console.log(e)
            e.preventDefault(); // rechargement de la page

            const { name, value } = e.target;
            setFormData({
                ...formData, 
                [name]: value 
            })

            if (formData.Mdp !== formData.VerifMdp) {
                alert("Les mot de passes ne sont pas les mêmes ");
                return;
            }
            console.log(formData);
        };

    return (
        <>

{             <Box
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
            </Box> }



        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }}>

        <h1>Inscription</h1>

        <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '300px',
        gap: '10px' 
         }}>
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
        </div>
        </>
    )
}