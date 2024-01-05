import { User } from '@/types/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

// const initialState : AuthState = {
//     isAuthenticated: false,
//     user: null,
// };

const initialState : AuthState = {
    isAuthenticated: true,
    user: {
        id: 1,
        name: 'John Doe',
        username: 'john.doe',
        email: 'john.doe@mial.com',
        avatar: 'avatar_6',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action : PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;