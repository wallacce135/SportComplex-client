import { BaseSyntheticEvent, FC, useContext, useState } from 'react';
import styles from './Login.module.css';
import { UserContext } from '../../UserContext/UserContext';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


const Login: FC = () => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const data = useSelector((state: any) => state.user);

    const context = useContext(UserContext);

    const { push } = useRouter()

    const Authorization = async (event: any) =>  {

        context.Authorize(login, password);
        push('/Profile');
        

    //    event.preventDefault();

    }

    return(
        <div className={styles.LoginBlock}>
            
            <div className={styles.LoginForm}>
                <h1>Авторизация</h1>
                <input type='text' placeholder='Логин' onChange={(event: BaseSyntheticEvent) => setLogin(event.target.value)}/>
                <input type='text' placeholder='Пароль' onChange={(event: BaseSyntheticEvent) => setPassword(event.target.value)}/>

                <button onClick={(e: any) => Authorization(e)}>Авторизоваться</button>
            </div>

        </div>
    )
}

export default Login