import './App.css';
import AttackSimulation from './components/AttackSimulation/AttackSimulation';
import DefenseSimulation from './components/DefenseSimulation/DefenseSimulation';
import InitialPrompt from './components/InitialPrompt/InitialPrompt';
import LaunchArenaButton from './components/LaunchArenaButton/LaunchArenaButton';
import ListAttacks from './components/ListAttacks/ListAttacks';
import { useState } from 'react';

function App() {
  const [showArena, setShowArena] = useState(false);

  return (
    <div className="App">
      <h1>L'arène</h1>
      <InitialPrompt />
      <LaunchArenaButton onClick={() => setShowArena(true)} />
      {showArena && (
        <>
          <ListAttacks />
          <AttackSimulation />
          <DefenseSimulation />
        </>
      )}
    </div>
  );

}

export default App;
