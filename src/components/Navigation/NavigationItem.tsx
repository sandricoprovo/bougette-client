import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationListItemStyled = styled.li`
    & > a {
        text-decoration: none;
        color: black;
    }
`;

interface NavigationListItemProps {
    text: string;
    url: string;
    toggleDrawer: (() => void) | undefined;
}

function NavigationListItem({
    text,
    url,
    toggleDrawer,
}: NavigationListItemProps) {
    return (
        <NavigationListItemStyled onClick={toggleDrawer}>
            <Link to={url}>{text}</Link>
        </NavigationListItemStyled>
    );
}

export default NavigationListItem;
