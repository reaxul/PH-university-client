import { createSlice } from "@reduxjs/toolkit"

type TAuthState = {
    user: null | {
        id: string,
        name: string,
        email: string
    },
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