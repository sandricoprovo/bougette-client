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
    toggleDrawer?: () => void;
}

function NavigationListItem({
    text,
    url,
    toggleDrawer = undefined,
}: NavigationListItemProps) {
    return !toggleDrawer ? (
        <NavigationListItemStyled>
            <Link to={url}>{text}</Link>
        </NavigationListItemStyled>
    ) : (
        <NavigationListItemStyled onClick={toggleDrawer}>
            <Link to={url}>{text}</Link>
        </NavigationListItemStyled>
    );
}

export default NavigationListItem;
