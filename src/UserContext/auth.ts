import { UserProfile } from "./user-profile";

export type JWTContextType = {
    isLoggedIn: boolean;
    user?: UserProfile;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>; 
}

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
  };