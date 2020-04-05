import React from 'react';

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map(
    ({ description, alt_description, id, urls }) => {
      return (
        <img
          src={urls.regular}
          key={id}
          alt={description ? description : alt_description}
        />
      );
    }
  );
  return <div>{images}</div>;
};

export default ImageList;
