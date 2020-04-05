import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tRa3qytI61ElXDIoTJFDVgnaGGv9kUjY8b85WTUli80'
  }
});
