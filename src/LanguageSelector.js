import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onLanguageChange }) => {
  return (
    <div>
      <h2>Select Language:</h2>
      <select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
