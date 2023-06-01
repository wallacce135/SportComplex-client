import { BaseSyntheticEvent, FC, useContext, useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import Router from 'next/router';

const Register: FC = () => {

    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');





    const ClickButton = async () => {
        
        await axios.post('http://localhost:4040/Register', {
            login: login,
            email: email,
            password: password
        })


        alert('Вы успешно зарегистрировались, используйте данные чтобы войти')
        Router.push('/Menu');


    }

    return(
        <div className={styles.RegisterBlock}>

            <div className={styles.RegisterForm}>
                <h1>Регистрация</h1>
                <input type='text' placeholder='Логин' onChange={(event: BaseSyntheticEvent) => setLogin(event.target.value)}/>
                <input type='text' placeholder='Email' onChange={(event: BaseSyntheticEvent) => setEmail(event.target.value)}/>
                <input type='password' placeholder='Пароль' onChange={(event: BaseSyntheticEvent) => setPassword(event.target.value)}/>

                <button onClick={ClickButton}>Зарегистрироваться</button>
            </div>

        </div>
    )
}

export default Register