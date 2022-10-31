import { useRouter } from 'next/router'
import { useState } from 'react';
import styles from '../../../styles/Secret.module.css'

const Secret = () => {
    const [code, setCode] = useState('');
    const [secret, setSecret] = useState('');
    const router = useRouter();
    const { id } = router.query;

    const storeLocally = (s) => {
        let suspects = JSON.parse(localStorage.getItem('suspects'));
        suspects[id] = {
            clue: s,
            locked: false
        };
        localStorage.setItem('suspects', JSON.stringify(suspects));
    };

    const checkSecret = async () => {
        try {
            const response = await fetch(`./api/secret?id=${id}&code=${code}`);
            if (!response.ok) {
                throw Error();
            }
            const json = await response.json();
            setSecret(json.secret);
            storeLocally(json.secret);
        } catch (error) {
            console.error(error);
        }
    };

    const pressNum = (e) => {
        const pressedNum = e.currentTarget.textContent;
        const newCode = code + pressedNum;
        if (newCode.length <= 4) {
            setCode(newCode);
        }

        if (newCode.length === 4) {
            checkSecret();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.code}>
                <input type="text" placeholder='* * * *' value={code} disabled />
                {code && <button type="reset" onClick={() => setCode('')}>❎</button>}
            </div>
            <ul className={styles.numpad__container}>
                <li><button onClick={pressNum}>1</button></li>
                <li><button onClick={pressNum}>2</button></li>
                <li><button onClick={pressNum}>3</button></li>
                <li><button onClick={pressNum}>4</button></li>
                <li><button onClick={pressNum}>5</button></li>
                <li><button onClick={pressNum}>6</button></li>
                <li><button onClick={pressNum}>7</button></li>
                <li><button onClick={pressNum}>8</button></li>
                <li><button onClick={pressNum}>9</button></li>
                <li><button onClick={pressNum}>0</button></li>
            </ul>
            <p>{secret}</p>
        </div>
    )
}

export default Secret;