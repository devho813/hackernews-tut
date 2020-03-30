import React from 'react';
import useStories from '../hooks/useStories';
import Story from './Story';

function Stories() {
  const { storyIds } = useStories();

  return (
    <>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
}

export default Stories;
