
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('Spanish');

  const toggleLanguage = () => {
    setLanguage(language === 'Spanish' ? 'English' : 'Spanish');
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'Spanish'
          ? 'Switch to English'
          : 'Switch to Spanish'}
      </button>

      <h1>
        {language === 'Spanish' ? '¡Hola!' : 'Hello!'}
      </h1>
    </div>
  );
}

export default App;
