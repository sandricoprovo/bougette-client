import { createGlobalStyle } from 'styled-components';

import NormalizeCSS from './NormalizeCSS';
import Fonts from './Fonts';

const GlobalStyles = createGlobalStyle`
    ${NormalizeCSS}
    ${Fonts}

    :root {
        //  ---------- COLORS ---------- //
        //  ---------- TYPOGRAPHY ---------- //
        --font-display: 'Abril Fatface';
        --font-body: 'Inter';
        //  ---------- SPACING ---------- //
        --max-page-width: 1920px;
        //  ---------- ELEVATION ---------- //
        //  ---------- BREAK POINTS ---------- //
    }
`;

export default GlobalStyles;
