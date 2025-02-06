import React from 'react';
import DateTime from './components/DateTime/DateTime';
import UserInfo from './components/UserInfo/UserInfo';
import GeminiAIComponent from './components/GeminiAI/GeminiAIComponent';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="main-title">Gemini AI Assistant</h1>
      </header>

      <main className="main-content">
        <DateTime />
        <UserInfo />
        <GeminiAIComponent />
      </main>
    </div>
  );
}

export default App;