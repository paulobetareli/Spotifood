const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

export async function getAccessToken() {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    }
    try {
        const response = await fetch(`https://accounts.spotify.com/api/token`, {
            method: 'POST',
            body: "grant_type=client_credentials",
            headers,
        })
        const res = await response.json()
        return Promise.resolve(res)
    } catch (e) {
        return Promise.reject(e)
    }
}

export async function getFeaturedPlaylist(token, filter) {
    const headers = {
        Authorization: `${token.token_type} ${token.access_token}`,
    }
    try{
        const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
            method: 'GET',
            headers,
        })
        const res = await response.json()
    
        if (response.status >= 400) {
            var error = new Error(response.status)
            error.response = response
            Cookies.remove('access_token')
            Cookies.remove('token_type')
            Router.push('/login')
            throw error
        } else {
            return Promise.resolve(res)
        }
           
    } catch (e) {
        return Promise.reject(e)

    }
}
