import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Suspect = () => {
    const [imgKey, setImgKey] = useState('');
    const router = useRouter();
    const { id } = router.query;
    const suspect = parseInt(id) + 1;

    useEffect(() => {
        const suspects = JSON.parse(localStorage.getItem('suspects'));
        if (suspects && id) {
            setImgKey(suspects[id].imgKey);
        }
        //console.log(suspect)
    }, [id]);

    return (
        <div>
            <h2>Misstänkt #{suspect}</h2>
            {/* solve placeholder images so it doesnt jump... */}
            <Link href={`/img/${imgKey}.png`}><img src={`/img/${imgKey}.png`} width="100%" background={"grey"} /></Link>
        </div>
    )
}

export default Suspect;