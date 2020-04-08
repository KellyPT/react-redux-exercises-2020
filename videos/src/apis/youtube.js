import axios from 'axios';

const KEY = 'AIzaSyBOm6M4tQxg-YEYXerMm60F94d5YnZ-lbI';

// create an preconfigured instance of axios that has the base URL and some parameters loaded inside it

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video' // only search for videos
  }
});
