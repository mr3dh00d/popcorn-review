import { User } from '@/types/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: User | null;
}

const initialState : AuthState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

// const initialState : AuthState = {
//     isAuthenticated: true,
//     token: '123',
//     user: {
//         id: 1,
//         name: 'John Doe',
//         username: 'john.doe',
//         email: 'john.doe@mial.com',
//         avatar: 'avatar_6',
//         createdAt: '2021-01-01',
//         updatedAt: '2021-01-01',
//     },
// };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action : PayloadAction<{token: string, user: User}>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;