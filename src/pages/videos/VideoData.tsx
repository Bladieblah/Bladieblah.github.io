type VideoDataType = {
  id: string,
  description: string,
}

const video_data: VideoDataType[] = [
  {
    id: 'OQUkfxfNL9U',
    description: `This is a guitar cover of the song “See You in My Nightmares” by Autralian band Daysend. I'm using my first guitar, an ESP LTD MH-50.`
  },
  {
    id: '6VVKJUojbtE',
    description: `I covered “I Remember” by Deadmau5 on guitar, and made a procedural visualiser for the video. Once I've cleaned up de code, I will link to the github repo so you can try it for yourself.`
  }
]

export const get_video_data = (id: string): VideoDataType | null =>  {
  for (const video of video_data) {
    if (video.id === id) {
      return video;
    }
  }

  return null;
};

export default video_data;