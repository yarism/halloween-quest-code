import Secret from '../src/components/Secrets/Secret';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Secret />
      </main>
    </div>
  )
}
