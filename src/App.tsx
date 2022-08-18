import { useEffect } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';

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
                <h1>Hello World</h1>
                <Footer>Hello Footer</Footer>
            </Layout>
        </>
    );
}

export default App;
