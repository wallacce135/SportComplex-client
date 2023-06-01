import { FC } from 'react';
import styles from './Menu.module.css';


const Menu: FC = () => {
    return(
        <div className={styles.MenuBlock}>
            <div className={styles.buttonBlock}>
                <button><a href="/SignUp">Зарегистрироваться</a></button>
                <button><a href="/SignIn">Авторизоваться</a></button>
            </div>
        </div>
    )
}

export default Menu