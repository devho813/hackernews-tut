import React, { memo } from 'react';
import useStory from '../hooks/useStory';

type Props = {
  storyId: number;
};

function Story({ storyId }: Props) {
  const { story } = useStory(storyId);

  return (
    <>
      {story && story.url && (
        <div>
          <a href={story.url}>
            <h2>{story.title}</h2>
          </a>
          <p>By: {story.by}</p>
          <p>Posted: {story.time}</p>
        </div>
      )}
    </>
  );
}

export default memo(Story);
