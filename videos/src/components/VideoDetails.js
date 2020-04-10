import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const snippet = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
