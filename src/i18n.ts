import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        ns: ['common', 'navigation', 'sign', 'errors', 'profile', 'admin'],
        lng: 'en',
        fallbackLng: 'en',
        returnEmptyString: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        backend: {
            loadPath: '/src/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
