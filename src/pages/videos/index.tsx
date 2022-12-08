import VideoItem from "../../components/VideoItem";

import video_data from "../videos/VideoData";

export default function Videos() {
  return (
    <>
      <h1>Music</h1>
      {video_data.map((d) => (<VideoItem id={d.id}>{d.description}</VideoItem>))}
    </>
  )
}