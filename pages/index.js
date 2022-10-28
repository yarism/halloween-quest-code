import Head from 'next/head'
import Secrets from '../src/components/Secrets/Secrets';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halloween 2022!</title>
        <meta name="description" content="Halloween" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Secrets />
      </main>
    </div>
  )
}
