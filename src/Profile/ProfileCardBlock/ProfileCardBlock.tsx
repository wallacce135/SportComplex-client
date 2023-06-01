import { FC } from 'react';
import styles from './ProfileCardBlock.module.css';
import axios from 'axios';
import Router from 'next/router';

interface IProps {
    Price: number;
    login: string;
    serviceName: string;
    serviceId: string;
    userId: string
}

const ProfileCardBlock: FC<IProps> = ({Price, login, serviceName, serviceId, userId}: IProps) => {

    const cancelButtonClick = (serviceId: string, userId: string)  => {
        
        axios.post('http://localhost:4040/cancelService', {
            serviceId: serviceId,
            userId: userId
        })

        alert('Запись успешно отменена!');
        Router.push('/Profile');
    }


    return(
        <div className={styles.ProfileCardBlock}>
            <h2>{serviceName}</h2>
            <h2>Оплачено для: {login}</h2>
            <h2>Цена: {Price}</h2>
            <button className={styles.CancelButton} onClick={() => cancelButtonClick(serviceId, userId)}>Отменить запись</button>
        </div>
    )
}

export default ProfileCardBlock;