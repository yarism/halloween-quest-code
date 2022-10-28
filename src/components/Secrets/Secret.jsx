import { useState } from 'react';
import styles from '../../../styles/Secret.module.css'

const Secret = () => {
    const [code, setCode] = useState('');
    const [secret, setSecret] = useState('');

    const checkSecret = async () => {
        try {
            const response = await fetch(`./api/secret?code=${code}`);
            if (!response.ok) {
                throw Error();
            }
            const json = await response.json();
            setSecret(json.secret);
        } catch (error) {
            console.error(error);
        }
    };

    const pressNum = (e) => {
        const pressedNum = e.currentTarget.textContent;
        const newCode = code + pressedNum;
        setCode(newCode);
    };

    return (
        <div className={styles.container}>
            <input className={styles.numpad} type="text" placeholder='* * * *' value={code} disabled />
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
            <button onClick={checkSecret} disabled={code.length !== 4}>Blaha</button>
            <p>{secret}</p>
        </div>
    )
}

export default Secret;