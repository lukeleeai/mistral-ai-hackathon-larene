import React, { useState, useEffect } from 'react';
import './ListAttacks.css';

function ListAttacks({ systemPrompt }) {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchScenarios() {
      setLoading(true);
      const response = await fetch('http://localhost:8000/initiate_attack_test/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          system_prompt: systemPrompt,
          branching_factor: 3,
          max_width: 3,
          max_depth: 3,
          top_k: 5
        })
      });
      const data = await response.json();
      setScenarios(data.scenarios || []);
      setLoading(false);
    }

    if (systemPrompt) {
      fetchScenarios();
    }
  }, [systemPrompt]);

  if (loading) {
    return <div>Loading scenarios...</div>;
  }

  return (
    <div className="ListAttacks">
      <p>Here are the possible attack scenarios :</p>
      <ul className="attacks">
        {scenarios.map((scenario, index) => (
          <li key={index}>{scenario}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListAttacks;
