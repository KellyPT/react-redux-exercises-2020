import React from 'react';
import useResources from './useResource';

const ResourceList = ({ resourceType }) => {
  const resources = useResources(resourceType);
  return (
    <div>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </div>
  );
};

export default ResourceList;
