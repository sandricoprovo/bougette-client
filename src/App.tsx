import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
// Pages //
import { Home, Auth, Statements, Page404, Statement } from './routes';

function App() {
    useEffect(() => {
        console.log('App started on port 3000...');
    }, []);

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Layout>
                    <Header>
                        <div>Bougette</div>
                        <Navigation />
                    </Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/statements" element={<Statements />} />
                        <Route
                            path="/statement/:statementId"
                            element={<Statement />}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    <Footer>Hello Footer</Footer>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
