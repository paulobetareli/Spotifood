import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loading from '../components/Loading'
import FeaturedPlaylist from '../components/FeaturedPlaylist'

export const index = () => {
  const { token, logout } = useAuth()
  console.log('token no iniciar', token)
  const { data: featuredPlaylists} = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token))

  console.log('featuredPlaylists', featuredPlaylists)

  if (!featuredPlaylists) {
    return <Loading />
  }

  return (
    <div>
      <FeaturedPlaylist playlists={featuredPlaylists.playlists}/>
    <div>
        <button text="Sair" onClick={logout}>Sair</button>
      </div>
    </div>
  )
}

export default index