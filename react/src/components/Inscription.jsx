import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    email: '',
    prenom: '',
    nom: '',
    ceinture: '1', 
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 3. Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    console.log("Données pour le back", formData);
    alert(`Bienvenue ${formData.prenom} ! Vous êtes bien inscrit sur Dojonum.`);
  };

  return (
    <div style={styles.container}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input 
          type="text" name="prenom" placeholder="Prénom" 
          value={formData.prenom} onChange={handleChange} required 
        />

        <input 
          type="text" name="nom" placeholder="Nom" 
          value={formData.nom} onChange={handleChange} required 
        />

        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleChange} required 
        />

        <label>Quelle est ta ceinture ?</label>
        <select name="ceinture" value={formData.ceinture} onChange={handleChange}>
          <option value="1">Blanche</option>
          <option value="2">Jaune</option>
          <option value="3">Orange</option>
          <option value="4">Verte</option>
          <option value="5">Bleue</option>
          <option value="6">Marron</option>
          <option value="7">Noire</option>
        </select>

        <input 
          type="password" name="password" placeholder="Mot de passe" 
          value={formData.password} onChange={handleChange} required 
        />

        <input 
          type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" 
          value={formData.confirmPassword} onChange={handleChange} required 
        />

        <button type="submit" style={styles.button}>S'inscrire</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  button: { backgroundColor: '#2ecc71', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '5px' }
};

export default Inscription;
