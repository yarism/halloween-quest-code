import { useRouter } from 'next/router'
import styles from '../../../styles/Navigation.module.css';

const Back = () => {
    const router = useRouter();

    return (
        <a onClick={() => router.back()} className={styles.back__button}>⬅</a>
    )
}

export default Back;