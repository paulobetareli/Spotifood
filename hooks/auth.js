import React, { useState, useEffect } from 'react'
// import { getToken } from '../services/getAccessToken'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { getHashes } from 'crypto'


export default function useAuth() {
    const [token, setToken] = useState({
        accessToken: Cookies.get('accessToken'),
        tokenType: Cookies.get('tokenType')
    })
    console.log('tokennn', token)

    useEffect(() => {
        if (Cookies.get('accessToken')) {
            setToken({
                accessToken: Cookies.get('accessToken'),
                tokenType: Cookies.get('tokenType')
            })
        }
        else {
            setToken(getAccessToken())
        }
    }, [])

    useEffect(() => {
        if (!token.accessToken) {
            Router.push('/login')
        }
    }, [token])

    return(token)

}

export function getAccessToken() {

    var hashParams = {}
    const urlParams = (window.location);
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1)
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2])
    }

    const token = hashParams

    if (token.access_token) {
        var expire_in = new Date()
        expire_in.setTime(expire_in.getTime() + (token.expires_in * 1000))
        Cookies.set('accessToken', token.access_token, { expires: expire_in, sameSite: 'strict' })
        Cookies.set('tokenType', token.token_type, { expires: expire_in })
        return token
    } else {
        return false
    }
}

