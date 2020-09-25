const authBaseURL = 'https://accounts.spotify.com/authorize/'

export async function Auth() {
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
export async function getFeaturedPlaylist(token, filter = null) {
    console.log('token token', token)
    const headers = {
        Authorization: `${token.tokenType} ${token.accessToken}`,
    }
    try {
        const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
            method: 'GET',
            headers,
        })
        const res = await response.json()
        return Promise.resolve(res)
    } catch (e) {
        return Promise.reject(e)
    }

}
