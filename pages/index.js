import React, { useState, useEffect } from 'react'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loader from '../components/Loader'
import FeaturedPlaylist from '../components/FeaturedPlaylist'
import Filters from '../components/Filters'
import Navbar from '../components/Navbar'
import { getFilters } from '../services/spotifyApi'
import { toast } from 'react-toastify'
import Router from 'next/router'

export const index = () => {
  const filtersValues = {}
  const [featuredPlaylists, setFeaturedPlaylists] = useState()
  const [filters, setFilters] = useState()
  const [isLoading, setIsLoading] = useState(false)


  const [auxFeaturedPlaylists, setAuxFeaturedPlaylists] = useState()

  const { token, logout } = useAuth()

  const getContent = async (_filtersValues) => {
    try {

      const _featuredPlaylists = await getFeaturedPlaylist('/v1/browse/featured-playlists', token, _filtersValues)
      const _filters = await getFilters()
      setFilters(_filters)
      setAuxFeaturedPlaylists(_featuredPlaylists)
    }
    catch (e) {
      console.log('e', e)
      Router.push('/login')
      return toast.warning('Necessário novo login')
    }

  }

  useEffect(() => {
    if (token) {
      getContent(filtersValues)
    }
  }, [token])

  useEffect(() => {
    setFeaturedPlaylists(auxFeaturedPlaylists)
  }, [auxFeaturedPlaylists])

  const handleUpdateFeaturedPlaylist = async (_filtersValues) => {
    setIsLoading(true)
    try {
      const _featuredPlaylists = await getFeaturedPlaylist('/v1/browse/featured-playlists', token, _filtersValues)
      setAuxFeaturedPlaylists(_featuredPlaylists)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      return toast.error('Erro ao atualizar')

    }

  }

  const getPlaylistFilteredByName = (playlistsByName) => {
    const newPlaylistArray = {
      ...featuredPlaylists,
      playlists: {
        ...featuredPlaylists.playlists,
        items: playlistsByName.map(playlistByName => {
          if (featuredPlaylists.playlists.items.find(featuredPlaylist => featuredPlaylist.name === playlistByName.item.name) !== 'undefined') {
            return playlistByName.item
          }
        })
      }
    }

    setFeaturedPlaylists(newPlaylistArray)
  }


  if (!featuredPlaylists || !filters || !auxFeaturedPlaylists) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Navbar getPlaylist={getPlaylistFilteredByName} playlists={auxFeaturedPlaylists.playlists} logout={logout} />
      <div className="justify-center m-10">
        <Filters UpdatePlaylist={handleUpdateFeaturedPlaylist} filters={filters.filters} />
        <div className="mt-6">
          <FeaturedPlaylist isLoading={isLoading}playlists={featuredPlaylists.playlists} />
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default index