import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getToken } from '../services/auth'

export default function Home() {
  const getAuthorization = async () => {
    try {
      const token = await getToken()
      console.log('token', token)
    }
    catch (e) {
      console.log('e', e)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Spotifood</title>
      </Head>

      <main className={styles.main}>
        <button onClick={getAuthorization}>
          <a>Clique aqui para logar </a>
        </button>
      </main>
    </div>
  )
}
