import styled from 'styled-components';

const NavigationListItemStyled = styled.li``;

interface NavigationListItemProps {
    text: string;
}

function NavigationListItem({ text }: NavigationListItemProps) {
    return <NavigationListItemStyled>{text}</NavigationListItemStyled>;
}

export default NavigationListItem;
