import React from 'react';

const VideoItem = ({ video }) => {
  const snippet = video.snippet;
  return (
    <div className="item">
      <img
        className="image"
        src={snippet.thumbnails.medium.url}
        alt="loading"
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
