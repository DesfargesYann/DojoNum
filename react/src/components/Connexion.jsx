import React, { useState } from 'react';

const Connexion = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec :", loginData);
  };

  return (
    <div style={styles.container}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input 
            type="email" name="email" 
            value={loginData.email} onChange={handleChange} 
            placeholder="exemple@mail.com" required 
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Mot de passe</label>
          <input 
            type="password" name="password" 
            value={loginData.password} onChange={handleChange} 
            placeholder="********" required 
          />
        </div>

        <button type="submit" style={styles.buttonLogin}>Se connecter</button>
      </form>
    </div>
  );
};

// Styles rapides en bas du fichier
const styles = {
  container: { maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '5px' },
  buttonLogin: { padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Connexion;