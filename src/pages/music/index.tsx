import VideoItem from "../../components/VideoItem";

import video_data from "../videos/VideoData";

export default function Music() {
  return (
    <>
      <h1>Music</h1>
      {video_data.map((d) => (<VideoItem id={d.id}>{d.description}</VideoItem>))}
      {/* <VideoItem id='OQUkfxfNL9U'>
        This is a guitar cover of the song &ldquo;See You in My Nightmares&rdquo; by Autralian band Daysend. I'm using my first guitar, an ESP LTD MH-50.
      </VideoItem> */}
    </>
  )
}