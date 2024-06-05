import axios from 'axios';

axios.defaults.baseURL = 'https://665ee7b91e9017dc16f1fb59.mockapi.io';

const getAllQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

const addNewQuiz = async newQuiz => {
  const response = await axios.post('/quizzes', newQuiz);
  return response.data;
};

const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export default {
  getAllQuizzes,
  addNewQuiz,
  deleteQuizById,
};
