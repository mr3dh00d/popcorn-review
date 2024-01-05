import { User } from '@/types/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isLogged: boolean;
    user: User | null;
}

const initialState : AuthState = {
    isLogged: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action : PayloadAction<User>) => {
            state.isLogged = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLogged = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;