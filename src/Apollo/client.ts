import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
    uri: import.meta.env.VITE_SERVER_URL as string,
    credentials: 'include',
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;
