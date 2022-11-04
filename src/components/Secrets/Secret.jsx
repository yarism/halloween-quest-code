import { useRouter } from 'next/router'
import { useState } from 'react';
import styles from '../../../styles/Secret.module.css'

const Secret = () => {
    const [code, setCode] = useState('');
    const router = useRouter();
    const { id } = router.query;

    const storeLocally = (imgKey) => {
        let suspects = JSON.parse(localStorage.getItem('suspects'));
        suspects[id].imgKey = imgKey;
        suspects[id].locked = false;
        localStorage.setItem('suspects', JSON.stringify(suspects));
    };

    const checkSecret = async (newCode) => {
        try {
            const response = await fetch(`./api/secret?id=${id}&code=${newCode}`);
            if (!response.ok) {
                throw Error();
            }
            const { imgKey } = await response.json();
            storeLocally(imgKey);
            router.push(`/suspect?id=${id}`);
        } catch (error) {
            alert('👻 - Försök igen!');
            setCode('');
        }
    };

    const pressNum = (e) => {
        const pressedNum = e.currentTarget.textContent;
        const newCode = code + pressedNum;
        if (newCode.length < 5) {
            setCode(newCode);
        }
        if (newCode.length === 4) {
            checkSecret(newCode);
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
        </div>
    )
}

export default Secret;