// static list of songs
export songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '4:05'},
    {title: 'I Want It That Way', duration: '2:30'},
    {title: 'All Star', duration: '3:14'}
  ];
};


export selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong; // whatever the current selected song
};