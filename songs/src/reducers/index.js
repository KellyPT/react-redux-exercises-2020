import { combineReducers } from 'redux';

// static list of songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '4:05' },
    { title: 'I Want It That Way', duration: '2:30' },
    { title: 'All Star', duration: '3:14' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong; // whatever the current selected song
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
