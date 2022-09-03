import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux/store';
import client from './apollo/client';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
import PrivateWrapper from './PrivateWrapper';
// Pages //
import { Home, Auth, Statements, Page404, Statement, ROUTES } from './routes';

function App() {
    useEffect(() => {
        console.log('App started on port 3000...');
    }, []);

    return (
        <>
            <GlobalStyles />
            <ReduxProvider store={store}>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Layout>
                            <Header>
                                <div>Bougette</div>
                                <Navigation />
                            </Header>
                            <Routes>
                                <Route path={ROUTES.HOME} element={<Home />} />
                                <Route path={ROUTES.LOGIN} element={<Auth />} />
                                <Route
                                    path={ROUTES.SIGNUP}
                                    element={<Auth />}
                                />
                                <Route
                                    path={ROUTES.STATEMENTS}
                                    element={
                                        <PrivateWrapper>
                                            <Statements />
                                        </PrivateWrapper>
                                    }
                                />
                                <Route
                                    path={`${ROUTES.STATEMENTS}/:statementId`}
                                    element={
                                        <PrivateWrapper>
                                            <Statement />
                                        </PrivateWrapper>
                                    }
                                />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                            <Footer>Hello Footer</Footer>
                        </Layout>
                    </BrowserRouter>
                </ApolloProvider>
            </ReduxProvider>
        </>
    );
}

export default App;
