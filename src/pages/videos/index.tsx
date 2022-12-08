import VideoItem from "../../components/VideoItem";

import video_data from "../../data/VideoData";

export default function Videos() {
  return (
    <>
      <h1>Music</h1>
      {video_data.map((d) => (<div key={d.id}><VideoItem id={d.id}>{d.description}</VideoItem></div>))}
    </>
  )
}