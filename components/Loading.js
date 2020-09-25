import { Oval } from 'svg-loaders-react'

export default function Loading() {
    return (
        <div className="loader">
            <Oval stroke="#F82525" />
            <style jsx>{`
                .loader {
                    height: 100vh;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}


import React, { useState, useEffect } from 'react'
// import { getToken } from '../services/getAccessToken'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { getHashes } from 'crypto'


export  function useAuth() {
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(getAccessToken())
        // setParams(getHashParams())
        // setToken(getTokenFromCookie())
    }, [])

    useEffect(() => {
        if (token === false) {
            Router.push('/login')
        }
        else {
            Router.push('/')
        }
    }, [token])

    return token
}

export function getAccessToken() {

    if (typeof document !== 'undefined' && document.cookie) {
        const token = { accessToken: Cookies.get('accessToken'), tokenType: Cookies.get('tokenType') }
        console.log('entrou', token)

        return token ? token : false
    }
    else { 
        var hashParams = {}
        const urlParams = (window.location);
        console.log('urlParams', urlParams)
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1)
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2])
        }

        const token = hashParams
        console.log('entrou 2', token)

        if (token.access_token) {
            var expire_in = new Date()
            expire_in.setTime(expire_in.getTime() + (token.expires_in * 1000))
            Cookies.set('accessToken', token.access_token, { expires: expire_in , sameSite: 'strict' })
            Cookies.set('tokenType', token.token_type, { expires: expire_in })
            return token 
        } else {
            return false
        }
    }
}


