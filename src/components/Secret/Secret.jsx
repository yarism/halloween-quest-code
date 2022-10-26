import { useState } from 'react';
import styles from '../../../styles/Home.module.css'

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
        <div>
            <h1 className={styles.title}>{!code ? '****' : code}</h1>
            {!code && <h1 className={styles.title}></h1>}
            <div>
                <button onClick={pressNum}>1</button>
                <button onClick={pressNum}>2</button>
                <button onClick={pressNum}>3</button>
                <button onClick={pressNum}>4</button>
                <button onClick={pressNum}>5</button>
                <button onClick={pressNum}>6</button>
                <button onClick={pressNum}>7</button>
                <button onClick={pressNum}>8</button>
                <button onClick={pressNum}>9</button>
                <button onClick={pressNum}>0</button>
            </div>
            <button onClick={checkSecret} disabled={code.length !== 4}>Blaha</button>
            <p>{secret}</p>
        </div>
    )
}

export default Secret;