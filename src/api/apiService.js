import apiClient from './apiClient';


export const fetchUserData = () => {
  return apiClient.get('/user'); 
};


export const createUser  = (data) => {
  return apiClient.post('/user', data);  
};
