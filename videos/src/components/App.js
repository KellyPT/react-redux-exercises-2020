import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBOm6M4tQxg-YEYXerMm60F94d5YnZ-lbI';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video' // only search for videos
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
