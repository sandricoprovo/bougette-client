import { createGlobalStyle } from 'styled-components';

import NormalizeCSS from './NormalizeCSS';

const GlobalStyles = createGlobalStyle`
    ${NormalizeCSS}

    :root {
        //  ---------- COLORS ---------- //
        //  ---------- TYPOGRAPHY ---------- //
        //  ---------- SPACING ---------- //
        --max-page-width: 1920px;
        //  ---------- ELEVATION ---------- //
        //  ---------- BREAK POINTS ---------- //
    }
`;

export default GlobalStyles;
