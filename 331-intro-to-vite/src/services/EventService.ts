import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Rattikan-P/Lab02-Vue-Dev-with-Vite-and-TS-db-',
  withCredentials: false,
  headers: {
    Accept: 'application/json', 
    'Content-Type': 'application/json'  
  }
});

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent (id: String) {
    return apiClient.get('/events/' + id)
  }
}

