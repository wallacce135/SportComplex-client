import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
    id: number | null;
    login: string | null;
    email: string | null;
    password: string | null;
}

export interface IUser {
    user: IUserState
}

const initialState: IUser = {
    user: {
        email: null,
        id: null,
        login: null,
        password: null
    }
}

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        dataChange: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { dataChange } = UserSlice.actions;
export default UserSlice.reducer;