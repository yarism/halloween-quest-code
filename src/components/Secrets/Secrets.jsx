import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/Secret.module.css';

const suspectablePeople = [
    {
        locked: true,
        clue: 'Thou shalt not pass'
    },
    {
        locked: true,
        clue: 'Thou shalt not pass'
    },
    {
        locked: true,
        clue: 'Thou shalt not pass'
    },
    {
        locked: true,
        clue: 'Thou shalt not pass'
    }
];

const Secrets = () => {
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('suspects')) {
            localStorage.setItem('suspects', JSON.stringify(suspectablePeople));
        }
        setSuspects(JSON.parse(localStorage.getItem('suspects')));
    }, []);

    return (
        <div className={styles.container}>
            <h2>Suspects</h2>
            <ul className={styles.secrets}>
                {suspects.map((secret, index) => {
                    return (
                        <Link key={index} href={`/suspect?id=${index}`}>
                            <li key={index}>
                                <h4>{secret.locked ? '🔒 ' : ''}Suspect #{index+1}</h4>
                                <p className={secret.locked ? styles.text__blur : ''}>{secret.clue}</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Secrets;