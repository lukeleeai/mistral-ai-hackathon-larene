import './App.css';
import AttackSimulation from './components/AttackSimulation/AttackSimulation';
import DefenseSimulation from './components/DefenseSimulation/DefenseSimulation';
import InitialPrompt from './components/InitialPrompt/InitialPrompt';
import LaunchArenaButton from './components/LaunchArenaButton/LaunchArenaButton';
import ListAttacks from './components/ListAttacks/ListAttacks';
import { useState } from 'react';

function App() {
  const [systemPrompt, setSystemPrompt] = useState('');
  const [showArena, setShowArena] = useState(false);

  const handlePromptSubmit = () => {
    setShowArena(true);
  };

  return (
    <div className="App">
      <h1>L'arène</h1>
      <InitialPrompt onChange={(e) => setSystemPrompt(e.target.value)} />
      <LaunchArenaButton onClick={handlePromptSubmit} />
      {showArena && (
        <>
          <ListAttacks systemPrompt={systemPrompt} />
          <AttackSimulation systemPrompt={systemPrompt} />
          <DefenseSimulation systemPrompt={systemPrompt} />
        </>
      )}
    </div>
  );
}

export default App;
