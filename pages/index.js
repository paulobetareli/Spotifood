import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useAuth from '../hooks/auth'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotify'
import Loading from '../components/Loading'
import Routes from './routes'

export default function DashBoard() {
  // const token = useAuth()

  // const { filters, setFilters } = useState([])
  // const { data: featuredPlaylists, error} = useSWR(`api/featured-playlist`,  () =>  getFeaturedPlaylist(token))
  // console.log('featuredPlaylists', featuredPlaylists)

  // if(!featuredPlaylists){
  //   return <Loading/>
  // }
  


  return (
    <div className={styles.container}>
        <Routes />
    </div>
  )
}
