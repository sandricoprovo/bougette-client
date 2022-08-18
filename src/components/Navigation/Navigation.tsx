import styled from 'styled-components';

import NavigationItem from './NavigationItem';

const NavigationStyled = styled.nav`
    border: 2px solid pink;
`;

const NavigationList = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    gap: 2rem;
`;

function Navigation() {
    return (
        <NavigationStyled>
            <NavigationList>
                {['TEST', 'TEST', 'TEST'].map((item, index) => (
                    <NavigationItem key={index} text={item} />
                ))}
            </NavigationList>
        </NavigationStyled>
    );
}

export default Navigation;
