import { useEffect } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
// Pages //
import Home from './pages/Home';

function App() {
    useEffect(() => {
        console.log('App started on port 3000...');
    }, []);

    return (
        <>
            <GlobalStyles />
            <Layout>
                <Header>
                    <div>Bougette</div>
                    <Navigation />
                </Header>
                <Home />
                <Footer>Hello Footer</Footer>
            </Layout>
        </>
    );
}

export default App;
