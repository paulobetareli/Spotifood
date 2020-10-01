import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loader from '../components/Loader'
import FeaturedPlaylist from '../components/FeaturedPlaylist'
import Filters from '../components/Filters'
import Navbar from '../components/Navbar'

export const index = () => {
  const { token, logout } = useAuth()
  console.log('token no iniciar', token)
  const { data: featuredPlaylists } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token))

  console.log('featuredPlaylists', featuredPlaylists)

  if (!featuredPlaylists) {
    return (
        <Loader />
    )
  }

  return (
    <div>
      <Navbar logout={logout} />
      <Filters />
      {/* <FeaturedPlaylist playlists={featuredPlaylists.playlists} /> */}
      <div>
      </div>
    </div>
  )
}

export default index