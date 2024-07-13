import { useEffect, useState } from "react";
import { isWordValid, randomWord } from "./data/wordsFunctions";
import Navbar from "./components/Navbar";
import MovesCounter from "./components/MovesCounter";
import GuessGrid from "./components/GuessGrid";
import Keyboard from "./components/Keyboard";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [correctWord, setCorrectWord] = useState("");
  const [moves, setMoves] = useState(0);
  const [guesses, setGuesses] = useState(Array<string>(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameEnded, setGameEnded] = useState(false);


  function handleCurrentGuess(letter: string) {
    if (currentGuess.length > 0 && letter === "BACK" && !gameEnded) {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    if (
      currentGuess.length < 5 &&
      letter !== "BACK" &&
      letter !== "ENTER" &&
      !gameEnded
    ) {
      setCurrentGuess((prev) => prev + letter);
    }
    if (letter === "ENTER" && moves < 6 && currentGuess.length === 5) {
      if (currentGuess === correctWord.toUpperCase()) {
        toast.success("you won!");
        setGameEnded(true);
      }
      if (isWordValid(currentGuess)) {
        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[moves] = currentGuess;
          return newGuesses;
        });
        setMoves((prev) => {
          const newMoves = prev + 1;
          if (newMoves >= 6) {
            setGameEnded(true);
            toast.remove
            toast.error(`Game over, correct word was ${correctWord}`);
          }
          return newMoves;
        });
        setCurrentGuess("");
      } else {
        toast.error("Invalid word!");
      }
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    const key = event.key.toUpperCase();
    if (key.length === 1 && key >= "A" && key <= "Z") {
      handleCurrentGuess(key);
    }
    if (key == "BACKSPACE") {
      handleCurrentGuess("BACK");
    }
    if (key == "ENTER") {
      handleCurrentGuess("ENTER");
    }
  }

  useEffect(() => {
    setCorrectWord(randomWord());
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="h-screen bg-bgblack flex flex-col">
      <Toaster />
      <Navbar />
      <MovesCounter moves={moves} />
      <GuessGrid
        guesses={guesses}
        currentGuess={currentGuess}
        currentMove={moves}
        correctWord={correctWord.toUpperCase()}
      />
      <Keyboard handleClick={handleCurrentGuess} />
      <Footer />
    </div>
  );
}

export default App;
