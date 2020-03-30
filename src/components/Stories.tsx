import React from "react";
import useStories from "../hooks/useStories";

function Stories() {
  const { storyIds, story } = useStories();

  return <p>{JSON.stringify(story)}</p>;
}

export default Stories;
