import { FC } from 'react'
import styles from './Header.module.css';


const Header: FC = () => {
    return(
        <div className={styles.Header}>
            <div className={styles.leftSide}>
                <h1><a href="/">СПОРTavr</a></h1>
            </div>
            <div className={styles.rightSide}>
                <a href="/Complex">Комплекс</a>
                <a href="/">Расписание</a>
                <a href="/Map">Карта</a>
                <a href="/Services">Услуги</a>
                <button>Авторизация</button>
            </div>
        </div>
    )
}


export default Header