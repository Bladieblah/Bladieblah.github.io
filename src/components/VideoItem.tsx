import { ReactNode, useEffect, useState } from 'react'
import styles from './styles/video-item.module.css'
import axios from "axios"
import Link from 'next/link'

type VideoProps = {
  id: string,
  children?: ReactNode,
}

type YoutubeMetaData = {
  title: string,
  thumbnail_url: string,
}

async function getMetaData(id: string): Promise<YoutubeMetaData> {
  const response = await axios.get<YoutubeMetaData>('https://www.youtube.com/oembed', {
    params: {
      format: "json", 
      url: `https://www.youtube.com/watch?v=${id}`
    }
  })

  return response.data;
}

export default function VideoItem(props: VideoProps) {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    async function makeRequest() {
      const data = await getMetaData(props.id);
      setThumbnail(data.thumbnail_url);
      setTitle(data.title);
    }

    makeRequest();
  })
  
  return (
      <Link href={`/videos/${props.id}`}>
        <div className={styles.content}>
          <article className={styles.text}>
            <h2>{title}</h2>
            <div>
              {props.children}
              <div className={styles.imageColumn}>
                <img src={thumbnail} alt='thumbnail'/>
              </div>
            </div>
          </article>
          <div className={styles.image}>
            <img src={thumbnail} alt='thumbnail'/>
          </div>
        </div>
      </Link>
  )
}
