const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const spotifyUrl = 'https://accounts.spotify.com/authorize'
import useAuth from '../hooks/auth'

import Router, { useRouter } from 'next/router'


export default function loginPage() {

    const handleClick = () => {
        const queryString = `client_id=${clientId}&response_type=token&redirect_uri=${origin}/`
        Router.push({
            pathname: spotifyUrl,
            query: queryString,
        })
    }

    return (
        <div>
            <text>Você precisa estar logado</text>
            <button onClick={handleClick}>clique aqui para logar</button>
        </div>
    )
}