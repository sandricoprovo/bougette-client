import { useState } from 'react';
import styled from 'styled-components';

import mockNavLinks from '../../mock/mockNav';

import NavigationItem from './NavigationItem';
import NavigationDrawer from './NavigationDrawer';

const NavigationStyled = styled.nav`
    border: 2px solid pink;

    & > ul {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`;

const NavigationList = styled.ul`
    list-style: none;
`;

function Navigation() {
    const isMobileWidth = true;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const navListItems = mockNavLinks.map((link, index) => (
        <NavigationItem
            key={index}
            text={link.text}
            url={link.url}
            toggleDrawer={toggleDrawer}
        />
    ));

    return !isMobileWidth ? (
        <NavigationStyled>
            <NavigationList>{navListItems}</NavigationList>
        </NavigationStyled>
    ) : (
        <NavigationDrawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
        >
            <NavigationList>{navListItems}</NavigationList>
        </NavigationDrawer>
    );
}

export default Navigation;
