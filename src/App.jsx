import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
    }}>
      <h1>🃏 Blackjack Trainer</h1>
      {!started ? (
        <button 
          onClick={() => setStarted(true)} 
          style={{ padding: "1rem 2rem", fontSize: "1.25rem", cursor: "pointer" }}
        >
          Start
        </button>
      ) : (
        <p style={{ fontSize: "1.25rem" }}>Flashcard logic will go here!</p>
      )}
    </div>
  );
}
