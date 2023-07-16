import React from 'react';
import TranslationButton from './Translation/TranslationButton';
import NotionButton from './Notion/NotionButton';

function App() {
  return (
    <div className="App">
      <h1>Englition</h1>
      <TranslationButton />
      <NotionButton />
    </div>
  );
}

export default App;
