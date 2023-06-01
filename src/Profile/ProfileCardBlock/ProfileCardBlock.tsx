import { FC } from 'react';
import styles from './ProfileCardBlock.module.css';


interface IProps {
    Price: number;
    login: string;
    serviceName: string;
}

const ProfileCardBlock: FC<IProps> = ({Price, login, serviceName}: IProps) => {
    return(
        <div className={styles.ProfileCardBlock}>
            <h2>{serviceName}</h2>
            <h2>Оплачено для: {login}</h2>
            <h2>Цена: {Price}</h2>
        </div>
    )
}

export default ProfileCardBlock;