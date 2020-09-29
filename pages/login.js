import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
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
        <div className="flex items-center justify-between bg-red">
            <Head>
                <title>Spotifood - Seja Bem Vindo</title>
            </Head>

            <div className="flex items-center justify-between">
                <div className="form-wrapper">
                    <div className="logo">
                        <a href="/" alt="Spotifood"><img src="https://res.cloudinary.com/paulobetareli/image/upload/w_465,h_250,c_limit/v1601350706/Spotifood/spotifood_uboyy7.png" alt="Spotifood" /></a>
                    </div>
                    <div>
                    </div>
                    <button onClick={redirectToSpotify} className="btn btn-primary w-full">
                        Entrar
                    </button>
                    <div className="mb-6">
                        <div class="outline relative border rounded focus-within:border-blue-500 mb-4">
                            <input type="text" name="name" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
                            <label for="username" class="absolute top-0 text-md bg-white p-4 -z-1 duration-300 origin-0">Nome Completo</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}