import React, { useState, useEffect } from 'react';
import './AttackSimulation.css';

function AttackSimulation({ systemPrompt }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      const response = await fetch('http://localhost:8000/get_attack_results/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      if (!data.status) {
        setResults(data.results || []);
      }
      setLoading(false);
    }

    if (systemPrompt) {
      fetchResults();
    }
  }, [systemPrompt]);

  if (loading) {
    return <div>Loading attack results...</div>;
  }

  const getColor = (num) => {
    if (num < 4) {
      return 'rgba(86,252,133,0.3)';
    } else if (num < 8) {
      return 'rgba(229,234,68,0.39)';
    } else {
      return 'rgba(255,98,98,0.3)';
    }
  };

  return (
    <div className="AttackSimulation">
      <p>Attack simulation :</p>
      <ul className="attacks">
        {results.map((result, index) => (
          <li key={index} className='number-display' style={{ backgroundColor: getColor(result.score) }}>
            {result.scenario}: {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttackSimulation;
