const API_BASE_URL = 'http://localhost:3030/api'; 

const API_ENDPOINTS = {
  FETCH_USERS: `${API_BASE_URL}/users`,
  UPDATE_USER: (userId) => `${API_BASE_URL}/update/users/${userId}`,
};

export default API_ENDPOINTS;
