import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
    hasAuthenticated: boolean;
}

const initialState: AuthenticationState = {
    hasAuthenticated: false,
};

// Slice
export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        updateAuthState: (state, action: PayloadAction<boolean>) => {
            state.hasAuthenticated = action.payload;
        },
    },
});

// Actions
export const { updateAuthState } = authenticationSlice.actions;

// Reducer
export default authenticationSlice.reducer;
