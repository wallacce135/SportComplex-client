import { FC,  } from 'react';
import Image from 'next/image';
import styles from './Cardblock.module.css';

import sportTavr from '../../../assets/Services/sporttavr.png';
import { useSelector } from 'react-redux';
import axios from 'axios';

interface ICardBlockProps {
    Price: number;
    description: string;
    serviceID: number;
    serviceName: string
}

const CardBlock: FC<ICardBlockProps> = ({Price, description, serviceID, serviceName}: ICardBlockProps) => {


    const data = useSelector((state: any) => state.user);


    const GetService = (serviceID: number) => {
        console.log('data.user ', data.user)
        axios.post('http://localhost:4040/getService', {
            serviceID: Number(serviceID),
            userID: Number(data.user.id)
        })

        alert('Вы успешно записались!')
    }


    return(
        <div className={styles.CardBlock}>
            <Image src={sportTavr} alt='' />
            <h3>{serviceName}</h3>
            <h4>{description}</h4>
            <h5>Цена: { String(Price) }</h5>
            <div className={styles.SignUp}>
                {
                    data.user.login !== null && data.user.password  !== null ? (<button onClick={() => GetService(serviceID)}>Записаться</button>) : ""
                }
                
            </div>
        </div>
    )

}


export default CardBlock