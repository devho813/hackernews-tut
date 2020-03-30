import { getStoryIds } from './../services/hnApi';
import { useState, useEffect } from 'react';

function useStories() {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);

  return {
    storyIds,
  };
}

export default useStories;
