import axios from './ultis/axios';

export async function profile() {
  const response = await axios.get('/api/user/profile');
  return response.data;
}
export async function login(user = {}) {
  const response = await axios.post('/api/auth/login', user);
  return response.data;
}
export async function logout() {
  const response = await axios.post('/api/logout');
  return response.data;
}
export async function getTires() {
  const response = await axios.get('/api/tires');
  return response.data;
}
export async function createTire(tire = {}) {
  const response = await axios.post('/api/tires', tire);
  return response.data;
}
