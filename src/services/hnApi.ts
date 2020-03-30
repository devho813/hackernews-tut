import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const storyUrl = `${baseUrl}/item/`;

export const getStory = async (storyId: number) => {
  const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }) => data);

  return result;
};

export const getStoryIds = async () => {
  const { data } = await axios.get(newStoriesUrl).then(data => data);

  return data as number[];
};
