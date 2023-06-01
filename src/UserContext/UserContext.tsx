import { useEffect, useState } from 'react';
import { UserProfile } from './user-profile';
import { createContext } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataChange } from '../store/slices/UserSlice';
import Router from 'next/router';


const initialState: UserProfile = {
    firstName: null,
    email: null,
    id: null,
    login: null,
    password: null,
    secondName: null,
    Authorize: () => {},
    Logout: () => {},
    SignUp: () => {}
}


const UserContext = createContext(initialState);


type UserContextProviderProps = {
    children:  React.ReactNode;
}


function UserContextProvider({children}: UserContextProviderProps) {


    const [user, setUser] = useState<UserProfile>(initialState)

    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.user);


    useEffect(() => {
        if(
            localStorage.getItem('user') !== 'undefined' &&
            localStorage.getItem('id') !== 'undefined' &&
            localStorage.getItem('password') !== 'undefined' &&
            localStorage.getItem('email') !== 'undefined'
        ) {
            dispatch(dataChange({id: localStorage.getItem('id'), login: localStorage.getItem('login'), email: localStorage.getItem('email'), password: localStorage.getItem('password')}))
        }
    }, [])

    const Authorize = async (login: string, password: string) => {

        if(login !== '' && password !== '') {
            await axios.post('http://localhost:4040/Login', {
                login: login,
                password: password 
            }).then((data) => {
                console.log('user server data  -> ', data.data[0]);
                if(data.data[0] !== undefined) {
                    console.log(data.data[0]);
                    dispatch(dataChange(data.data[0]));
                    setUser(data.data);
                    console.log('data -> ', data.data[0]);
                    localStorage.setItem('email',  data.data[0].email)
                    localStorage.setItem('id',  data.data[0].userID)
                    localStorage.setItem('password',  data.data[0].password)
                    localStorage.setItem('login',  data.data[0].login)
                    setTimeout(() => {
                        Router.push('/Profile');
                    }, 1500)
                }
                else {
                    alert('Проверьте правильность ввода данных!')
                }
            })
        }
    }

    const Logout = () => {
        dispatch(dataChange({id: null, login: null, email: null, password: null}));
        setUser(initialState);
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('login');
        localStorage.removeItem('id');
    }

    const SignUp = (login: string, email: string, password: string) => {
        if(login && email && password) {
            // axios.post('http://localhost:4040/Register').then((data) => {

            // })

            sessionStorage.setItem('login', login)
            sessionStorage.setItem('password', password)
            sessionStorage.setItem('email', email)
        }
    }


    return(
        <UserContext.Provider value={{
            ...user,
            Authorize,
            SignUp,
            Logout
        }}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContextProvider, UserContext}