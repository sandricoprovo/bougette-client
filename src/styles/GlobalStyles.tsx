import { createGlobalStyle } from 'styled-components';

import NormalizeCSS from './NormalizeCSS';
import Fonts from './Fonts';

const GlobalStyles = createGlobalStyle`
    ${NormalizeCSS}
    ${Fonts}

    :root {
        //  ---------- COLORS ---------- //
        //  ---------- TYPOGRAPHY ---------- //
        // Families
        --font-display: 'Abril Fatface';
        --font-body: 'Inter';
        // Sizing
        --font-size-xxxl: 4.209rem;
        --font-size-xxl: 3.157rem;
        --font-size-xl: 2.369rem;
        --font-size-lg: 1.777rem;
        --font-size-med: 1.333rem;
        --font-size-base: 1rem;
        --font-size-sm: 0.75rem;
        --font-size-xs: 0.563rem;
        --font-size-xxs: 0.422rem;
        --font-body-lh: 160%;
        //  ---------- SPACING ---------- //
        --max-page-width: 1920px;
        //  ---------- ELEVATION ---------- //
        //  ---------- BREAK POINTS ---------- //
    }
`;

export default GlobalStyles;
