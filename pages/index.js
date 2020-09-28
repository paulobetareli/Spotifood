import React, { useContext, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import AuthContext from '../hooks/auth'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'


export const index = () => {
  const { token } = useContext(AuthContext)

  const { data: featuredPlaylist, error } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token))

  console.log('featuredPlaylist', featuredPlaylist)


  return <div>VAI VIRAR PLAYLST</div>
}

export default index