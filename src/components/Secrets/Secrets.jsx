import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/Secret.module.css';

const suspectablePeople = [
    {
        locked: true
    },
    {
        locked: true
    },
    {
        locked: true
    },
    {
        locked: true
    }
];

const Secrets = () => {
    const [suspects, setSuspects] = useState([]);
    const [showGoogleForm, setShowGoogleForm] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('suspects')) {
            localStorage.setItem('suspects', JSON.stringify(suspectablePeople));
        }
        setSuspects(JSON.parse(localStorage.getItem('suspects')));
    }, []);
    
    useEffect(() => {
        let locked = suspects.find(o => o.locked === true);
        if (suspects.length && !locked) {
            setShowGoogleForm(true);
        }
    }, [suspects])

    return (
        <div className={styles.container}>
            <h2>Misstänkta</h2>
            <ul className={styles.secrets}>
                {suspects.map((secret, index) => {
                    return (
                        <Link key={index} href={secret.locked ? `/code?id=${index}` : `/suspect?id=${index}`}>
                            <li key={index}>
                                <h4>{secret.locked ? '🔒 ' : ''}Misstänkt #{index+1}</h4>
                                {secret.locked && <p className={secret.locked ? styles.text__blur : ''}>Thou shalt not pass</p>}
                                {!secret.locked && <img src={`/img/${secret.imgKey}.png`} width='100%' />}
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <h3 style={{ textAlign: 'center', fontSize: '40px' }}>🎃👻🎃</h3>
            <a className={styles.gform__btn} href="https://docs.google.com/forms/d/e/1FAIpQLSeODdEbDpfuT4gzWPxeCt079Md7SauP2vDRede6hJ9sfg5t-A/viewform?usp=sf_link" target="_blank" rel="noreferrer">Gissa mördaren!</a>
        </div>
    )
}

export default Secrets;