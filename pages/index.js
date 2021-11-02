import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import PlayerList from '../components/List';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Master Halısaha</title>
        <meta name="description" content="Halısaha takip sistemi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PlayerList />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
