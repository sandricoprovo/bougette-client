import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    showAddStatementModal: boolean;
    showStatementEditor: boolean;
    lineItemCreator: { type: string; show: boolean };
    showLineItemEditor: boolean;
}

const initialState: UiState = {
    showAddStatementModal: false,
    showStatementEditor: false,
    lineItemCreator: { type: 'income', show: false },
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
        toggleLineItemCreator: (state, action: PayloadAction<string>) => {
            const {
                lineItemCreator: { show },
            } = state;

            // Toggles the show prop while updating which editor to show.
            const updatedState = {
                type: action.payload || 'income',
                show: !show,
            };

            state.lineItemCreator = updatedState;
        },
    },
});

// Actions
export const {
    toggleAddStatement,
    toggleStatementEditor,
    toggleLineItemEditor,
    toggleLineItemCreator,
} = uiSlice.actions;

// Reducer
export default uiSlice.reducer;
