import { getStoryIds, getStory } from "./../services/hnApi";
import { useState, useEffect } from "react";

function useStories() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [story, setStory] = useState({});

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
    getStory(22726491).then(data => data && setStory(data));
  }, []);

  return {
    storyIds,
    story
  };
}

export default useStories;
