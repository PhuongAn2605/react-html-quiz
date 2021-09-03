import globalTranslations from './global.json';
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize } from 'react-localize-redux';

const initializeLanguage = {
    languages: [
        { name: "English", code:"en" },
        { name: "Vietnamese", code:"vn"}
    ],
    translation: globalTranslations,
    options: { renderToStaticMarkup }
    
}

export default initializeLanguage;