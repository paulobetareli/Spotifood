import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loader from '../components/Loader'
import FeaturedPlaylist from '../components/FeaturedPlaylist'
import Filters from '../components/Filters'
import Navbar from '../components/Navbar'
import { getFilters } from '../services/spotifyApi'

export const index = () => {
  const [filtersValues, setFiltersValues] = useState({})
  const [featuredPlaylists, setFeaturedPlaylists] = useState({})

  const { token, logout } = useAuth()
  const { data: filters } = useSWR('/v2/5a25fade2e0000213aa90776', () => getFilters())
  const { data: _featuredPlaylists, error } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token, filtersValues))

  React.useEffect(() => {
    setFeaturedPlaylists(_featuredPlaylists)
  }, [_featuredPlaylists])

console.log('featuredPlaylists', featuredPlaylists)
  const getPlaylistFilteredByName = (playlistsByName) => {
    const newPlaylistArray = {
      ...featuredPlaylists,
      playlists: {
        ...featuredPlaylists.playlists,
        items: playlistsByName.map(playlistByName => {
          if(featuredPlaylists.playlists.items.find(featuredPlaylist => featuredPlaylist.name === playlistByName.item.name) !== 'undefined'){
            return playlistByName.item
          }
        })
      }
    }

    setFeaturedPlaylists(newPlaylistArray)
  }

  const getFiltersValues = (playlists) => {
    setFiltersValues()
  }
  console.log('_featuredPlaylists', _featuredPlaylists)
  console.log('_featuredPlaylists', _featuredPlaylists)


  if (!_featuredPlaylists || !filters || !featuredPlaylists) {
    return (
      <Loader />
    )
  }
  // playlistsByName).length === 0 ? featuredPlaylists.playlists : 
  return (
    <div>
      <Navbar getPlaylist={getPlaylistFilteredByName} playlists={_featuredPlaylists.playlists} logout={logout} />
      <div className="justify-center m-10">
        <Filters getFilter={getFiltersValues} filters={filters.filters} />
        <div className="mt-6">
          <FeaturedPlaylist playlists={featuredPlaylists.playlists} />
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default index