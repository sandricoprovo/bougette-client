interface Routes {
    HOME: string;
    LOGIN: string;
    SIGNUP: string;
    STATEMENTS: string;
    STATEMENT: string;
}

const ROUTES: Routes = Object.freeze({
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: 'signup',
    STATEMENTS: '/statements',
    STATEMENT: '/statement',
});

export default ROUTES;
