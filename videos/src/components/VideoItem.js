import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  const snippet = video.snippet;
  return (
    <div className="video-item item">
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
