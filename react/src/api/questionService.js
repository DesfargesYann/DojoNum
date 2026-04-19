import axios from 'axios';

//const API_URL = 'http://localhost:3000/api'; // chemin local
const API_URL = 'https://dojonum-production.up.railway.app' // chemin externe

export const getQuestionsQuiz = async (niveau, limite = 10) => {
  const response = await axios.get(`${API_URL}/questions/quiz`, {
    params: { niveau, limite }
  });
  return response.data;
};

export const getResultatQuizByUtilisateur = async (niveau = 5, limite = 3, token) =>
{
  const response = await axios.get(`${API_URL}/resultat/`, 
    {
      params: { niveau_quiz: niveau, limite},
      headers: { Authorization: `Bearer ${token}` }
    });
  return response.data;
};

export const  createResultat = async (resultData, token) => 
{
  const response = await axios.post(`${API_URL}/resultat/`, resultData,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return response.data;
};


export const  createUtilisateur = async (resultData) => 
{
  const response = await axios.post(`${API_URL}/utilisateur/`, resultData);
  return response.data;
};

export const  loginUtilisateur = async (resultData) => 
{
  const response = await axios.post(`${API_URL}/utilisateur/login`, resultData);
  return response.data;
};

export const getToken = () => localStorage.getItem('token');

export const getUtilisateur = () => JSON.parse(localStorage.getItem('utilisateur'));

export const estConnecte = () => !!localStorage.getItem('token');

export const deconnexion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('utilisateur');
};