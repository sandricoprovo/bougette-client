import { MouseEvent } from 'react';
import styled from 'styled-components';

const DeleteRecordStyled = styled.button``;

interface DeleteRecordProps {
    onDeleteHandler: () => void;
}

export default function DeleteRecord({ onDeleteHandler }: DeleteRecordProps) {
    // Prevents any parent onClick events from firing when this button is clicked.
    function handleRecordDelete(event: MouseEvent) {
        event.stopPropagation();
        onDeleteHandler();
    }

    // TODO: replace word delete with trash icon
    return (
        <DeleteRecordStyled type="button" onClick={handleRecordDelete}>
            Delete
        </DeleteRecordStyled>
    );
}
