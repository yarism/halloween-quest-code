import styles from '../styles/Home.module.css'
import Suspect from '../src/components/Suspects/Suspect'
import Back from '../src/components/Navigation/Back'

export default function SuspectPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Back />
        <Suspect />
      </main>
    </div>
  )
}
