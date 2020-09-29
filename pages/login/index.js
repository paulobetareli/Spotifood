import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import styles from './styles.css'
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
        <>
            <Head>
                <title>Spotifood - Seja Bem Vindo</title>
            </Head>
           
            <div className={styles.mainWrapper}>
                <div className="form-wrapper">
                    <div className="logo">
                    <a href="/" alt="Spotifood"><img src="https://res.cloudinary.com/paulobetareli/image/upload/w_465,h_250,c_limit/v1601350706/Spotifood/spotifood_uboyy7.png" alt="Spotifood" /></a>
                    </div>
                    <div>
            </div>
            <button onClick={() => redirectToSpotify()}>clique aqui para logar</button>

                    {/* {authType === 'login' ?
                        <LoginForm onResult={handleResult} handleSignup={() => setAuthType('signup')}/>
                    :
                        <SignupForm onResult={handleResult} handleLogin={() => setAuthType('login')} />
                    } */}
                </div>
            </div>

        </>

    )
}