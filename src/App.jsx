import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import './i18n';
import './index.css';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.classList.toggle('korean', i18n.language === 'ko');
    }, [i18n.language]);

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Philosophy />
            <Services />
            <Team />
            <Contact />
        </div>
    );
}

export default App;
