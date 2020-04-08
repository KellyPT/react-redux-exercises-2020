import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBOm6M4tQxg-YEYXerMm60F94d5YnZ-lbI';

class App extends React.Component {
  onSearchTermSubmit = (searchTerm) => {
    youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video' // only search for videos
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
