import React from "react";
import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>🃏 Blackjack Trainer</h1>
      {!started ? (
        <button onClick={() => setStarted(true)} style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}>Start</button>
      ) : (
        <p>Flashcard logic will go here!</p>
      )}
    </div>
  );
}
