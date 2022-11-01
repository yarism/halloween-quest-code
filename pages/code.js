import Secret from '../src/components/Secrets/Secret';
import Back from '../src/components/Navigation/Back';
import styles from '../styles/Home.module.css'

export default function CodePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Back />
        <Secret />
      </main>
    </div>
  )
}
