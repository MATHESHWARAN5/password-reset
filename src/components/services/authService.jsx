import axios from 'axios';

const API_URL = '/api/auth';

const forgotPassword = (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

const resetPassword = (resetToken, password) => {
  return axios.post(`${API_URL}/reset-password/${resetToken}`, { password });
};

export default {
  forgotPassword,
  resetPassword,
};
