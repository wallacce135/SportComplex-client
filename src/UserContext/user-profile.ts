export type UserProfile = {
    id?: string | null;
    email?: string | null;
    login?: string | null;
    firstName?: string | null;
    secondName?: string | null;
    password?: string | null;

    Authorize: (email: string, password: string) => void;
    SignUp: (email: string, password: string, login: string, firstName?: string, secondName?: string) => void;
    logout: () => void;
}