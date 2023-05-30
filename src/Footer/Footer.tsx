import { FC } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

import facebook from '../../assets/facebookicon.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';



const Footer: FC = () => {
    return(
        <div className={styles.Footer}>
            <h3><a href="/">Наша команда</a></h3>
            <h3><a href="/">Вакансии</a></h3>
            <h3><a href="/">Правила посещения</a></h3>
            <Image src={facebook} alt='' />
            <Image src={twitter} alt='' />
            <Image src={youtube} alt='' />
        </div>
    )
}

export default Footer