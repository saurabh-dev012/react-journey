import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  const getPhotos = async () => {
    const data = await fetchPhotos('cat')
    console.log(data)
  }

  const getVideos = async () => {
    const data = await fetchVideos('cat')
    console.log(data)
  }

  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button className="bg-green-400 px-4 py-2 m-5" onClick={getPhotos}>
        Get Photos
      </button>

      <button className="bg-green-400 px-4 py-2 m-5" onClick={getVideos}>
        Get Videos
      </button>
    </div>
  )
}

export default App
