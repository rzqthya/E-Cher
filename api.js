import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.118.127:8000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


// export const api = {
//     register: async (user) => {
//         const response = await fetch(`${BASE_URL}/register`, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(user),
//         });

//         if (!response.ok) {
//             const data = await response.json();
//             throw new Error(data.message);
//         }

//         return response.json();
//     },
// };
