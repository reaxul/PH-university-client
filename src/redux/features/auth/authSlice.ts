import { RootState } from './../../store';
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
    userId: string
    role: string
    iat: number
    exp: number
}

type TAuthState = {
    user: null | TUser
    token: null | string
}

const initialState: TAuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // state = action.payload
            const { user, token } = action.payload
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            // state = initialState
            state.user = null;
            state.token = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;