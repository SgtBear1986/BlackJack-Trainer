import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!started ? (
        <>
          <h1>🃏 <strong>Blackjack Trainer</strong></h1>
          <button
            onClick={() => setStarted(true)}
            style={{
              fontSize: "1.2rem",
              padding: "0.75rem 1.5rem",
              marginTop: "1rem",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Start Training
          </button>
        </>
      ) : (
        <p>Flashcard logic will go here!</p>
      )}
    </div>
  );
}