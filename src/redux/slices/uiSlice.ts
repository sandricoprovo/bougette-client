import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    showAddStatementModal: boolean;
}

const initialState: UiState = {
    showAddStatementModal: false,
};

// Slice
export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleAddStatement: (state) => {
            state.showAddStatementModal = !state.showAddStatementModal;
        },
    },
});

// Actions
export const { toggleAddStatement } = uiSlice.actions;

// Reducer
export default uiSlice.reducer;
