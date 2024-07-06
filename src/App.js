import './App.css';
import { useEffect, useState } from 'react';
import Result from './Result';
import Difficulty from './Difficulty';

function App() {
  const [num, setNum] = useState("");
  const [difficulty, setDifficulty] = useState('Easy');
  const [secretNum, setSecretNum] = useState(null);
  const [range, setRange] = useState(11); // Initialize with Easy range

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  //Why useEffect is uesd?
  // Functionality: This useEffect hook recalculates the range and generates a new secretNum whenever the difficulty state changes.

  // Dependency Array ([difficulty]): This array specifies which variables or state values the useEffect depends on. In this case, [difficulty] means that the effect should re-run whenever the difficulty state variable changes.

  // Execution: When the component mounts (initial render) and every time difficulty changes thereafter, the code inside useEffect recalculates range based on the selected difficulty and generates a new random secretNum.
  useEffect(() => {
    let newRange;
    if (difficulty === "Easy") {
      newRange = 11;
    } else if (difficulty === "Medium") {
      newRange = 51;
    } else {
      newRange = 101;
    }

    setRange(newRange);

    // Generates a random number from 1 to the newRange (exclusive)
    const secretNum = Math.floor(Math.random() * newRange);
    setSecretNum(secretNum);
  }, [difficulty]);

  return (
    <div className="container">
      <div className="head">
        <label htmlFor='term'>
          Guess the number between 1 to {range - 1} ({secretNum})
        </label>
      </div>
      <input id='term' type='text' name='term' onChange={handleChange} />
      {/* Pass the secretNum and num to Result component for further logic */}
      <Result
        secretNum={secretNum}
        num={num}
      />
      <Difficulty
        difficulty={difficulty}
        handleDifficulty={handleDifficulty}
      />
    </div>
  );
}

export default App;
