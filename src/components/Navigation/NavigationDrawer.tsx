import { ReactNode } from 'react';
import styled from 'styled-components';

const NavigationDrawerStyled = styled.nav`
    background-color: red;
    position: absolute;
    padding-top: 1rem;
    height: 88vh;
    width: 100%;
    top: 20px;
    right: 0;

    /* transform: translateX(110%); */

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    & > ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

interface NavigationDrawerProps {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    children: ReactNode;
}

export default function NavigationDrawer({
    children,
    isDrawerOpen,
    toggleDrawer,
}: NavigationDrawerProps) {
    return (
        <>
            <button type="button" onClick={toggleDrawer}>
                Menu
            </button>
            {isDrawerOpen ? (
                <NavigationDrawerStyled>{children}</NavigationDrawerStyled>
            ) : null}
        </>
    );
}
