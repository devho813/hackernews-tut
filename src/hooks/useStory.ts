import { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

export type Story = {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

function useStory(storyId: number) {
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    getStory(storyId).then((data: Story) => data && setStory(data));
  }, []);

  return {
    story,
  };
}

export default useStory;
