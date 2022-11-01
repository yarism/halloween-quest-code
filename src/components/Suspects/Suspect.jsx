import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../../styles/Secret.module.css';

const Suspect = () => {
    const router = useRouter();
    const { id } = router.query;
    const suspect = parseInt(id) + 1;

    return (
        <div>
            <h2>Suspect #{suspect}</h2>
            <p>Can you find the hidden code?</p>
            <Link href={`/img/${id}.png`}><img src={`/img/${id}.png`} width="100%" /></Link>
            <Link href={`/code?id=${id}`}><button className={styles.cta__button}>Fill in code</button></Link>
        </div>
    )
}

export default Suspect;