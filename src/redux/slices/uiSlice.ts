import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    showAddStatementModal: boolean;
    showStatementEditor: boolean;
    showLineItemEditor: boolean;
}

const initialState: UiState = {
    showAddStatementModal: false,
    showStatementEditor: false,
    showLineItemEditor: false,
};

// Slice
export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleAddStatement: (state) => {
            state.showAddStatementModal = !state.showAddStatementModal;
        },
        toggleStatementEditor: (state) => {
            state.showStatementEditor = !state.showStatementEditor;
        },
        toggleLineItemEditor: (state) => {
            state.showLineItemEditor = !state.showLineItemEditor;
        },
    },
});

// Actions
export const {
    toggleAddStatement,
    toggleStatementEditor,
    toggleLineItemEditor,
} = uiSlice.actions;

// Reducer
export default uiSlice.reducer;
