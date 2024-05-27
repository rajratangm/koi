// // // src/services/authService.js
// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api/auth';

// // export const register = async (name, email, password) => {
// //   const response = await axios.post(`${API_URL}/register`, { name, email, password });
// //   return response.data;
// // };

// // export const login = async (email, password) => {
// //   const response = await axios.post(`${API_URL}/login`, { email, password });
// //   return response.data;
// // };

// // authService.js

// import axios from 'axios';

// const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

// export const register = async ({ name, email, password }) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, {
//       name,
//       email,
//       password
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error during registration:', error);
//     throw error;
//   }
// };

// export const login = async ({ email, password }) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, {
//       email,
//       password
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error during login:', error);
//     throw error;
//   }
// };




import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, {
      name,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    console.log('login')
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    console.log('logincompleted')
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
