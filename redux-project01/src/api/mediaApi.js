import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

const formatUnsplashResults = (results = []) =>
  results.map((photo) => ({
    id: photo.id,
    title: photo.alt_description || photo.description || 'Unsplash photo',
    image: photo.urls?.regular || photo.urls?.small || '',
    user: photo.user?.name || 'Unknown creator',
    likes: photo.likes || 0,
    source: 'Unsplash',
    type: 'photo',
  }))

const formatPexelsResults = (results = []) =>
  results.map((video) => ({
    id: video.id,
    title: video.user?.name ? `${video.user.name} video` : 'Pexels video',
    image:
      video.image ||
      video.video_pictures?.[0]?.picture ||
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    user: video.user?.name || 'Unknown creator',
    duration: video.duration || 0,
    source: 'Pexels',
    type: 'video',
    videoUrl: video.video_files?.[0]?.link || '',
  }))

export async function fetchPhotos(query = 'nature', page = 1, perPage = 20) {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page: perPage },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  })

  return formatUnsplashResults(res.data.results)
}

export async function fetchVideos(query = 'nature', perPage = 15) {
  const res = await axios.get('https://api.pexels.com/videos/search', {
    params: { query, per_page: perPage },
    headers: { Authorization: PEXELS_KEY },
  })

  return formatPexelsResults(res.data.videos)
}

export async function fetchMedia(type = 'photos', query = 'nature', page = 1, perPage = 20) {
  if (type === 'videos') {
    return fetchVideos(query, perPage)
  }

  return fetchPhotos(query, page, perPage)
}


