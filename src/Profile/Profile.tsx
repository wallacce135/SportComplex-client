import {FC, useEffect, useState} from 'react';
import styles from './Profile.module.css';
import axios from 'axios';
import Router from 'next/router';
import ProfileCardBlock from './ProfileCardBlock/ProfileCardBlock';

const Profile: FC = () => {

    const [serverData, setServerData] = useState<any>();    


    useEffect(() => {
        if(localStorage.getItem('email') === 'undefined' || localStorage.getItem('password') === 'undefined') {
            Router.push('/');
        }

        axios.post('http://localhost:4040/UserSchedule', {
                id: localStorage.getItem('id')
        }).then((data) => {
            console.log('data -> ', data.data);
            setServerData(data.data);
        })
    }, [])

    return(
        <div className={styles.ProfileBlock}>
            <div className={styles.Heading}>
            <h1>Вы записались на следующие мероприятия:</h1>
            </div>
            <div className={styles.ProfileCardsBlock}>
                {serverData  && serverData.map((item: any) => (
                    <ProfileCardBlock Price={item.Price} login={item.login} serviceName={item.serviceName} serviceId={item.serviceID} userId={item.userID} />
                ))}


            </div>
        </div>
    )
}


export default Profile