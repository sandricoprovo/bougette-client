interface Routes {
    HOME: string;
    LOGIN: string;
    SIGNUP: string;
    STATEMENTS: string;
}

const ROUTES: Routes = Object.freeze({
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: 'signup',
    STATEMENTS: '/statements',
});

export default ROUTES;
