import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { get_video_data } from '../VideoData'
import { GetServerSideProps } from 'next'
import styles from './video.module.css'

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

export default function Video() {
  const router = useRouter();
  const id = router.query.id as string;

  const video = get_video_data(id);

  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    async function makeRequest() {
      const data = await getMetaData(id);
      setTitle(data.title);
    }

    makeRequest();
  })

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.video}>
        <iframe
          src={`https://www.youtube.com/embed/${video?.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}/>
          <p>
            {video?.description}
          </p>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<object> = async (context) => {
  if (!context.params) {
    return { notFound: true }
  }

  var id = context.params.id ?? '';
  if (id instanceof Array) {
    id = id[0];
  }

  const video = get_video_data(id);

  if (!video) {
    return { notFound: true }
  }

  return {
    props: {}
  };
}