import { FC,  } from 'react';
import Image from 'next/image';
import styles from './Cardblock.module.css';

import sportTavr from '../../../assets/Services/sporttavr.png';

interface ICardBlockProps {
    Price: number;
    description: string;
    serviceID: number;
    serviceName: string
}

const CardBlock: FC<ICardBlockProps> = ({Price, description, serviceID, serviceName}: ICardBlockProps) => {

    return(
        <div className={styles.CardBlock}>
            <Image src={sportTavr} alt='' />
            <h3>{serviceName}</h3>
            <h4>{description}</h4>
            <h5>Цена: { String(Price) }</h5>
            <div className={styles.SignUp}>
                <button>Записаться</button>
            </div>
        </div>
    )

}


export default CardBlock