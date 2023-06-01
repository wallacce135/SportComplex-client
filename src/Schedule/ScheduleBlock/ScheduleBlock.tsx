import { FC } from 'react';
import styles from './ScheduleBlock.module.css';


interface IScheduleBlock {
    datetime: string;
    gym: string;
    serviceName: string;
}

const ScheduleBlock:FC<IScheduleBlock> = ({serviceName, datetime, gym}: IScheduleBlock) => {
    return(
        <div className={styles.scheduleBlock}>
            <h1>{serviceName}</h1>
            <h2>Дата: {datetime}</h2>
            <h3>Расположение: {gym}</h3>
        </div>
    )
}

export default ScheduleBlock