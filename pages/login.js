import React from 'react'
import Router from 'next/router'
import useAuth from '../hooks/auth'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const spotifyUrl = 'https://accounts.spotify.com/authorize'

export default function loginPage() {

    const redirectToSpotify = () => {
        const queryString = `client_id=${clientId}&response_type=token&redirect_uri=${origin}`
        Router.push({
            pathname: spotifyUrl,
            query: queryString,
        })
    }

    return (
        <div>
            <text>Você precisa estar logado</text>
            <button onClick={() => redirectToSpotify()}>clique aqui para logar</button>
        </div>
    )
}