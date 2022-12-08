export type VideoDataType = {
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
  },
  {
    id: 'eAy6nO2LErY',
    description: `My entry into the MRNB contest 2021 hosted by Mayones guitars.`
  },
  {
    id: '_b_SOnE6_Gw',
    description: `A cover of “Gotta Catch 'em All” by Jason Paige, better known as the “Pokemon Theme Song”. It was a lot of fun to make, and is my most watched video so far!`
  },
  {
    id: 'F2-i88voMzY',
    description: `Complete guitar cover of "A Voice Within" by Intervals. I added the vocals by subtracting the instrumental version of the song from the version with vocals. With a bit of finessing during mixing, it turned out really nice! I'm Using my Ormsby Goliath headless guitar.`
  },
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