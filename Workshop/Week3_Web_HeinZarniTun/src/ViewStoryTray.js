import { useState, useEffect } from "react";
import { StoryTray } from "./StoryTray.js";
import "./styleForTray.css";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export function ViewStoryTray() {
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 10) {
    stories.length = 10;
  }

  return (
    <div
      className="custom-style"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
