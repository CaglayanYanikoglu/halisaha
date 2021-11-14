import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import PlayerList from '../List';

export default function SoccerMain(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Master Halısaha</title>
        <meta name="description" content="Halısaha takip sistemi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PlayerList {...props} />
        <audio controls id="music" autoPlay className={styles.hidden}>
          {/* LOOOOOL */}
          <source src="https://goalballlive.com/wp-content/uploads/2021/02/UEFA-Champions-League-Theme-Song-On-Screen.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
