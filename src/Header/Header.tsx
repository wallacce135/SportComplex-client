import { FC, useContext } from 'react'
import styles from './Header.module.css';

import Router from 'next/router';
import { useSelector } from 'react-redux';
import { UserContext } from '../UserContext/UserContext';
import Image from 'next/image';


import Logo from '../../assets/logo.png';

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
                <Image src={Logo} alt='' style={{width: "100px", height: "85px"}}/>
                <h1><a href="/">СПОРTavr</a></h1>
            </div>
            <div className={styles.rightSide}>
                <a href="/Complex">Комплекс</a>
                <a href="/Schedule">Расписание</a>
                <a href="/Map">Карта</a>
                <a href="/Services">Услуги</a>
                {
                    data.user.login !== null && data.user.password  !== null ? 
                    (
                        <>
                            <a href="/Profile">Профиль</a>
                            <button onClick={() => leaveApp()}>Выйти</button>
                        </>
                    ) :
                    (<button onClick={() => PushToMenu()}>Авторизоваться</button>)
                }
                
                
            </div>
        </div>
    )
}


export default Header