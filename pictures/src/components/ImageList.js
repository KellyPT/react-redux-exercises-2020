import React from 'react';

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map((image, i) => {
    return <img src={image.urls.regular} key={i} alt={image.tags[0].title} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
