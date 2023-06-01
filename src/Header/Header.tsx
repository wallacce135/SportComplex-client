import { FC, useContext } from 'react'
import styles from './Header.module.css';

import Router from 'next/router';
import { useSelector } from 'react-redux';
import { UserContext } from '../UserContext/UserContext';

const Header: FC = () => {

    const data = useSelector((state: any) => state.user);
    const context = useContext(UserContext);


    const leaveApp = () => {
        context.Logout();
        Router.push('/');
    }

    const PushToMenu = () => {
        Router.push('/Menu')
    }

    return(
        <div className={styles.Header}>
            <div className={styles.leftSide}>
                <h1><a href="/">СПОРTavr</a></h1>
            </div>
            <div className={styles.rightSide}>
                <a href="/Complex">Комплекс</a>
                <a href="/Schedule">Расписание</a>
                <a href="/Map">Карта</a>
                <a href="/Services">Услуги</a>
                {
                    data.user.login !== null && data.user.password  !== null ? 
                    (<button onClick={() => leaveApp()}>Выйти</button>) :
                    (<button onClick={() => PushToMenu()}>Авторизоваться</button>)
                }
                
                
            </div>
        </div>
    )
}


export default Header