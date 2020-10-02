import Cookies from 'js-cookie'
import Router from 'next/router'

export async function getFilters() {
    try {
        const response = await fetch(`https://www.mocky.io/v2/5a25fade2e0000213aa90776`, {
            method: 'GET',
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
    try {
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
