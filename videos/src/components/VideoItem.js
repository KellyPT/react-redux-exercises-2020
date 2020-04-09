import React from 'react';

const VideoItem = ({ video }) => {
  const snippet = video.snippet;
  return (
    <div>
      <img src={snippet.thumbnails.medium.url} alt="loading" />
      {snippet.title}
    </div>
  );
};

export default VideoItem;
