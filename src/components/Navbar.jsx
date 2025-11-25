import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ko' ? 'en' : 'ko';
        i18n.changeLanguage(newLang);
        document.body.classList.toggle('korean', newLang === 'ko');
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <img src="/images/tetra-logo.png" alt="Tetra" className="logo-image" />
                    </div>

                    <div className="navbar-right">
                        <div className="navbar-links">
                            <button onClick={() => scrollToSection('philosophy')} className="nav-link">
                                {t('nav.philosophy')}
                            </button>
                            <button onClick={() => scrollToSection('services')} className="nav-link">
                                {t('nav.services')}
                            </button>
                            <button onClick={() => scrollToSection('team')} className="nav-link">
                                {t('nav.team')}
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="nav-link">
                                {t('nav.contact')}
                            </button>
                        </div>
                        <button onClick={toggleLanguage} className="lang-toggle">
                            {i18n.language === 'ko' ? 'EN' : 'KO'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
