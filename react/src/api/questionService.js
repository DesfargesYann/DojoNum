import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // chemin classique

export const getQuestionsQuiz = async (niveau, limite = 10) => {
  const response = await axios.get(`${API_URL}/questions/quiz`, {
    params: { niveau, limite }
  });
  return response.data;
};