import { useEffect, useState } from 'react'
import axios from 'axios'
import video_data, { get_video_data, VideoDataType } from '../../data/VideoData'
import { GetStaticProps } from 'next'
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

export default function Video(props: VideoDataType) {

  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    async function makeRequest() {
      const data = await getMetaData(props.id);
      setTitle(data.title);
    }

    makeRequest();
  })

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.video}>
        <iframe
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}/>
          <p>
            {props.description}
          </p>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = video_data.map((d) => {return {params: {id: d.id}}});
  
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<object> = async (context) => {
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
    props: video
  };
}