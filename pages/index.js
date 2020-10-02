import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loader from '../components/Loader'
import FeaturedPlaylist from '../components/FeaturedPlaylist'
import Filters from '../components/Filters'
import Navbar from '../components/Navbar'
import { getFilters } from '../services/spotifyApi'

export const index = () => {
  const { token, logout } = useAuth()
  const { data: featuredPlaylists } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token))
  const { data: filters, error} = useSWR('/v2/5a25fade2e0000213aa90776', () => getFilters())
  console.log("error", error)
  if (!featuredPlaylists || !filters) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Navbar logout={logout} />
      <div className="justify-center m-10">
        <Filters filters={filters.filters} />
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