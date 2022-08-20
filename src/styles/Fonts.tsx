import { css } from 'styled-components';

const Fonts = css`
    @font-face {
        font-family: 'Inter';
        src: url('../../public/fonts/Inter-Regular.woff2') format('woff2'),
            url('../../public/fonts/Inter-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Abril Fatface';
        src: url('../../public/fonts/AbrilFatface-Regular.woff2')
                format('woff2'),
            url('../../public/fonts/AbrilFatface-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default Fonts;
