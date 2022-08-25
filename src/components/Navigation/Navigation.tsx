import { useState } from 'react';
import styled from 'styled-components';

import { ROUTES } from '../../routes';

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

    const navListItems = Object.entries(ROUTES).map((route) => {
        const [page, url] = route as [string, string];

        // Removes any non-static routes.
        if (page.toLowerCase() === 'statement') return;

        return (
            <NavigationItem
                key={`${page}_${url}`}
                text={page}
                url={url}
                toggleDrawer={isMobileWidth ? toggleDrawer : undefined}
            />
        );
    });

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
