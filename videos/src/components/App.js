import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBOm6M4tQxg-YEYXerMm60F94d5YnZ-lbI';

class App extends React.Component {
  state = { videos: [] };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video' // only search for videos
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />I have
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
