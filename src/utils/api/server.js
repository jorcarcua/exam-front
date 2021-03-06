import auth from '../auth';

const BASE_URL = process.env.REACT_APP_SERVER;
console.log('la url del server');
console.log(BASE_URL);

const getToken = () => {
  return auth.getToken();
};

const _getExams = async () => {
  const token = getToken();

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_URL}exams/`;
  const response = await fetch(url, options);

  if (response.ok) {
    const exams = await response.json();
    return exams;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _addExam = async (exam) => {
  const token = getToken();

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exam),
  };

  const url = `${BASE_URL}exams`;

  const response = await fetch(url, options);

  if (response.ok) {
    const examCreated = await response.json();
    return examCreated;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _editExam = async (exam, id) => {
  const token = getToken();

  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exam),
  };

  const url = `${BASE_URL}exams/${id}`;

  const response = await fetch(url, options);

  if (response.ok) {
    const examUpdated = await response.json();
    return examUpdated;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _deleteExam = async (id) => {
  const token = getToken();

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_URL}exams/${id}`;

  const response = await fetch(url, options);

  if (response.ok) {
    const deletedQuestion = await response.json();
    return deletedQuestion;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _getQuestionsExam = async (examId) => {
  const token = getToken();

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_URL}exams/${examId}/questions`;

  const response = await fetch(url, options);

  if (response.ok) {
    const questions = await response.json();
    return questions;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _addQuestion = async (question) => {
  const token = getToken();

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  };

  const url = `${BASE_URL}exams/${question.exam}/questions`;

  const response = await fetch(url, options);

  if (response.ok) {
    const questionCreated = await response.json();
    return questionCreated;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _editQuestion = async (question, id) => {
  const token = getToken();

  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  };

  const url = `${BASE_URL}questions/${id}`;

  const response = await fetch(url, options);

  if (response.ok) {
    const questionUpdated = await response.json();
    return questionUpdated;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _deleteQuestion = async (id) => {
  const token = getToken();

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_URL}questions/${id}`;

  const response = await fetch(url, options);

  if (response.ok) {
    const deletedQuestion = await response.json();
    return deletedQuestion;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _randomQuestion = async (examId) => {
  const token = getToken();

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_URL}/exams/${examId}/questions/random`;
  const response = await fetch(url, options);

  if (response.ok) {
    const question = await response.json();
    return question;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const _authenticate = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const url = `${BASE_URL}user/login`;

  const response = await fetch(url, options);

  if (response.ok) {
    const res = await response.json();
    return res.data.token;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};

export default {
  _getExams,
  _randomQuestion,
  _getQuestionsExam,
  _deleteExam,
  _addExam,
  _editExam,
  _editQuestion,
  _addQuestion,
  _deleteQuestion,
  _authenticate,
};
