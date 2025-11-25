import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <section id="philosophy" className="section philosophy bg-light">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">{t('philosophy.title')}</h2>
                    <p className="section-subtitle">{t('philosophy.subtitle')}</p>
                </motion.div>

                <div className="philosophy-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="philosophy-card"
                    >
                        <h3 className="card-number">{t('philosophy.risk.number')}</h3>
                        <h4 className="card-title">{t('philosophy.risk.title')}</h4>
                        <div className="card-content">
                            <p className="card-paragraph">{t('philosophy.risk.intro')}</p>
                            <p className="card-paragraph">{t('philosophy.risk.challenge')}</p>
                            <p className="card-paragraph">{t('philosophy.risk.reality')}</p>
                            <blockquote className="card-quote">{t('philosophy.risk.question')}</blockquote>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="philosophy-card"
                    >
                        <h3 className="card-number">{t('philosophy.unicorn.number')}</h3>
                        <h4 className="card-title">{t('philosophy.unicorn.title')}</h4>
                        <div className="card-content">
                            <p className="card-paragraph">{t('philosophy.unicorn.intro')}</p>
                            <blockquote className="card-quote">{t('philosophy.unicorn.question')}</blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
