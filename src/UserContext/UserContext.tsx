import { FC, useEffect, useState } from 'react';
import { UserProfile } from './user-profile';
import { KeyedObject } from './auth';
import jwtDecode from 'jwt-decode';
import { createContext } from 'vm';



const initialState: UserProfile = {
    firstName: null,
    email: null,
    id: null,
    login: null,
    password: null,
    secondName: null,
    Authorize: () => {},
    logout: () => {},
    SignUp: () => {}
}


const UserContext = createContext(initialState);


type UserContextProviderProps = {
    children:  React.ReactNode;
}


function UserContextProvider({children}: UserContextProviderProps) {


    const [user, setUser] = useState<UserProfile>(initialState)



    useEffect(() => {
        if(user) {
            
        }
    })

}