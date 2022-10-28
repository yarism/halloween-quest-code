import Link from 'next/link';
import styles from '../../../styles/Secret.module.css';

const secrets = [
    {
        locked: true,
        clue: 'Thou shalt not pass'
    },
    {
        locked: true,
        clue: 'Thou shalt not pass'
    },
    {
        locked: false,
        clue: 'Halloj'
    },
    {
        locked: true,
        clue: 'Thou shalt not pass'
    }
]

const Secrets = () => {
    return (
        <div className={styles.container}>
            <h2>Secrets...</h2>
            <ul className={styles.secrets}>
                {secrets.map((secret, index) => {
                    return (
                        <li key={index}>
                            <Link key={index} href={`/code?id=${index}`}>
                                <div>
                                    <h4>{secret.locked ? '🔒 ' : ''}Clue #{index+1}</h4>
                                    <p className={secret.locked ? styles.text__blur : ''}>{secret.clue}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Secrets;