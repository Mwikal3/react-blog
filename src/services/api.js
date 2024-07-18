// import axios from 'axios';

// const API_URL = '/.netlify/functions'; // Relative path to Netlify functions

// export const getPosts = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/list`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };

// export const getFilteredPosts = async (query) => {
//   try {
//     const response = await axios.get(`${API_URL}/filter`, {
//       params: { query }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching filtered posts:', error);
//     throw error;
//   }
// };
