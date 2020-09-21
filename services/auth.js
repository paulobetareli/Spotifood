const clientId = 'cb221986240a4932971bbade058c90b5'
const clientSecret = '2a9a9a0291894e64937627f6d32083d2'


export const getToken = () => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    }

    return fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        body: "grant_type=client_credentials",
        headers,

    }).then(response => response.json()).then(res => { return Promise.resolve(res) })
}