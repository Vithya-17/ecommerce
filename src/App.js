import React, { useState, useEffect } from 'react';
import EnglishTranslations from './translations/en.json';
import JapaneseTranslations from './translations/jpn.json';
import LanguageSelector from './LanguageSelector';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState(EnglishTranslations);

  useEffect(() => {
    const languageTranslations = selectedLanguage === 'en' ? EnglishTranslations : JapaneseTranslations;
    setTranslations(languageTranslations);
    document.title = languageTranslations.app_title || 'My App';
  }, [selectedLanguage]);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const translate = (key) => {
    return translations[key] || key;
  };

  return (
    <div>
      <LanguageSelector
        languages={[
          { code: 'en', name: 'English' },
          { code: 'jpn', name: '日本語' },
        ]}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <h1>{translate('welcome_message')}</h1>
      <p>{translate('description')}</p>
    </div>
  );
};

export default App;
