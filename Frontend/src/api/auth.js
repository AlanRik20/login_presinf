import axios from './axios';



export const registerRequest = (User)=> axios.post(`/register`, User)

export const loginRequest = (user) => axios.post(`/Login`, user, { withCredentials: true });


export const verifyTokenRequest = (token) => {
  return axios.get('/verify', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
