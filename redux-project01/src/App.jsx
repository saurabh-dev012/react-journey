import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMedia, setQuery, setType } from './features/mediaSlice'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  const dispatch = useDispatch()
  const { type, query, status, items, error } = useSelector((state) => state.media)
  const [searchTerm, setSearchTerm] = useState(query)

  useEffect(() => {
    dispatch(loadMedia({ type: 'photos', query: 'nature' }))
  }, [dispatch])

  const handleSearch = (event) => {
    event.preventDefault()
    const trimmed = searchTerm.trim() || 'nature'
    dispatch(setQuery(trimmed))
    dispatch(loadMedia({ type, query: trimmed }))
  }

  const handleTypeChange = (nextType) => {
    const trimmed = searchTerm.trim() || query || 'nature'
    dispatch(setType(nextType))
    dispatch(loadMedia({ type: nextType, query: trimmed }))
  }

  return (
    <CollectionPage
      type={type}
      query={query}
      status={status}
      items={items}
      error={error}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onSearch={handleSearch}
      onTypeChange={handleTypeChange}
    />
  )
}

export default App
