import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NavigationDrawerStyled = styled(motion.nav)`
    background-color: red;
    position: absolute;
    padding: 2rem 1rem;
    height: 88vh;
    width: 100%;
    top: 88px;
    right: 0;

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

const variantTransition = {
    duration: 0.25,
    ease: [0.68, -0.55, 0.27, 1.55],
};

const navigationDrawerVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: variantTransition,
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: variantTransition,
    },
};

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
            <button
                type="button"
                onClick={toggleDrawer}
                style={{
                    height: 80,
                    width: 80,
                }}
            >
                Menu
            </button>
            <AnimatePresence mode="wait">
                {isDrawerOpen && (
                    <NavigationDrawerStyled
                        key="nav_drawer"
                        variants={navigationDrawerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {children}
                    </NavigationDrawerStyled>
                )}
            </AnimatePresence>
        </>
    );
}
