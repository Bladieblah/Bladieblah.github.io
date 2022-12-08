import VideoItem from '../../components/VideoItem';
import video_data from '../../data/VideoData';
import styles from './video.module.css'

export default function Videos() {
  return (
    <div className={styles.content}>
      <h1>Music</h1>
      {video_data.map((d) => (
        <div key={d.id}>
          <VideoItem id={d.id}>
            {d.description}
          </VideoItem>
        </div>
      ))}
    </div>
  )
}
