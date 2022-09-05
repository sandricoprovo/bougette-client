import { configureStore } from '@reduxjs/toolkit';

// Reducers
import authenticationReducer from './slices/authenticationSlice';
import uiStateReducer from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        ui: uiStateReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
