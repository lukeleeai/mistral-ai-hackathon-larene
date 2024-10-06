function InitialPrompt({ onChange }) {
  return (
    <div className="InitialPrompt">
      <p>Welcome to the LLM Security Consultant!</p>
      <p>I'm here to identify potential security risks in your LLM-based application.</p>
      <p>Let's start by entering your system prompt below:</p>
      <div>
        <textarea className="initial-prompt" placeholder='Your system prompt here' onChange={onChange}></textarea>
      </div>
    </div>
  );
}

export default InitialPrompt;
