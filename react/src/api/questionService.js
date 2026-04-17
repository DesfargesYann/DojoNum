import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // chemin classique

export const getQuestionsQuiz = async (niveau, limite = 10) => {
  const response = await axios.get(`${API_URL}/questions/quiz`, {
    params: { niveau, limite }
  });
  return response.data;
};

export const getResultatQuizByUtilisateur = async (id_utilisateur, niveau = 5, limite = 3) =>
{
  const response = await axios.get(`${API_URL}/resultat/${id_utilisateur}`, 
    {
      params: { niveau, limite}
    });
  return response.data;
};

export const  createResultat = async (resultData) => 
{
  const response = await axios.post(`${API_URL}/resultat/`, resultData);
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