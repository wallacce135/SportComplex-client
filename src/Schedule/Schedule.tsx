import { FC, useEffect, useState } from 'react';
import styles from './Schedule.module.css';
import axios from 'axios';
import ScheduleBlock from './ScheduleBlock/ScheduleBlock';

const Schedule: FC = () => {


    const [schedule, setSchedule] = useState<any>(null);

    useEffect(() => {
        axios.get('http://localhost:4040/Schedule').then((data) => {
            setSchedule(data.data);
        })
    }, [])

    return(
        <div className={styles.Schedule}>
            <h1>Текущее расписание</h1>
            <div className={styles.CurrentSchedule}>

                {schedule && schedule.map((item: any) => (
                    <ScheduleBlock serviceName={item.serviceName} datetime={item.datetime} gym={item.gym} />
                ))}
                

            </div>
        </div>
    )
}

export default Schedule;