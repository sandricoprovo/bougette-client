import { useState } from 'react';
import styled from 'styled-components';

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

    return !isMobileWidth ? (
        <NavigationStyled>
            <NavigationList>
                {['TEST', 'TEST', 'TEST'].map((item, index) => (
                    <NavigationItem key={index} text={item} />
                ))}
            </NavigationList>
        </NavigationStyled>
    ) : (
        <NavigationDrawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
        >
            <NavigationList>
                {['TEST', 'TEST', 'TEST'].map((item, index) => (
                    <NavigationItem key={index} text={item} />
                ))}
            </NavigationList>
        </NavigationDrawer>
    );
}

export default Navigation;
