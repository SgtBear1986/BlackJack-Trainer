import { useState, useEffect } from "react";

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// [Charts omitted here for brevity; already defined in full in canvas]
const hardChart = {}; const softChart = {}; const pairChart = {};
const generateDeck = () => [];

export default function BlackjackFlashcards() {
  const [started, setStarted] = useState(false);
  const [deck, setDeck] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("all");
  const [randomize, setRandomize] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fullDeck = generateDeck();
    const filtered = filter === "all" ? fullDeck : fullDeck.filter(c => c.type === filter);
    const newDeck = randomize ? shuffle(filtered) : filtered;
    setDeck(newDeck);
    setCurrent(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
  }, [filter, randomize]);

  const card = deck[current];
  if (!started) return (
    <div style={{ backgroundColor: '#121212', color: '#f0f0f0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>🃏 Blackjack Trainer</h2>
      <button onClick={() => setStarted(true)} style={{ fontSize: '1.25rem', padding: '0.75rem 1.5rem', cursor: 'pointer' }}>Start Training</button>
    </div>
  );

  if (!card) return (
    <div style={{ color: 'white', textAlign: 'center', paddingTop: '2rem' }}>
      Loading flashcards...
    </div>
  );

  function handleAnswer(answer) {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    setTotal(total + 1);
    if (answer === card.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setShowAnswer(false);
      setCurrent((current + 1) % deck.length);
      setSelectedAnswer(null);
    }, 6000);
  }

  return (
    <div style={{ backgroundColor: "#121212", color: "#f0f0f0", fontFamily: "Arial", padding: "1rem", maxWidth: '100%', boxSizing: 'border-box' }}>
      <h2>🃏 Blackjack Flashcards</h2>
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ backgroundColor: '#fff', color: '#000' }}>
        <option value="all">All</option>
        <option value="hard">Hard</option>
        <option value="soft">Soft</option>
        <option value="pair">Pair</option>
      </select>
      <label style={{ marginLeft: '1rem' }}>
        <input type="checkbox" checked={randomize} onChange={(e) => setRandomize(e.target.checked)} /> Random
      </label>
    </div>
  );
}
