import axios from 'axios';

// create an preconfigured instance of axios that has the base URL
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
