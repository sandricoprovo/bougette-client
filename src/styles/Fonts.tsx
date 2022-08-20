import { css } from 'styled-components';

const Fonts = css`
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Regular.woff2') format('woff2'),
            url('/fonts/Inter-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Abril Fatface';
        src: url('/fonts/AbrilFatface-Regular.woff2') format('woff2'),
            url('/fonts/AbrilFatface-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default Fonts;
