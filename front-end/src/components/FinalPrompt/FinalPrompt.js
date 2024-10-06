import React from 'react';
import './FinalPrompt.css';

function FinalPrompt({ onChange }) {
  return (
    <div className="FinalPrompt">
      <p>Thank you for using the LLM Security Consultant!</p>
      <p>Based on the attack and defense simulations, here are the final recommendations:</p>
      <div>
        <textarea className="final-prompt" placeholder='Your final recommendations here' onChange={onChange}></textarea>
      </div>
    </div>
  );
}

export default FinalPrompt;
