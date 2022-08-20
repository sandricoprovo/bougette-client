/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react';

export default {
    server: {
        port: 3000,
    },
    plugins: [react()],
};
