interface GuessGridProps {
  guesses: string[];
  currentGuess: string;
  currentMove: number;
  correctWord: string;
}

export default function GuessGrid({
  guesses,
  currentGuess,
  currentMove,
  correctWord,
}: GuessGridProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      {guesses.map((guess, guessIdx) => (
        <div key={guessIdx} className="flex">
          {Array.from({ length: 5 }).map((_, letterIdx) => {
            const letter =
              guessIdx === currentMove
                ? currentGuess[letterIdx]
                : guess[letterIdx];
            const color =
              guessIdx < currentMove
                ? getLetterColor(letter, letterIdx, correctWord)
                : "bg-transparent";
            return (
              <div
                key={letterIdx}
                className={`w-12 h-12 border border-white/30 m-1 flex items-center justify-center ${color}`}
              >
                <p className="text-white text-xl">{letter}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function getLetterColor(letter: string, position: number, correctWord: string) {
  if (correctWord[position] === letter) {
    return "bg-green-500";
  } else if (correctWord.includes(letter)) {
    return "bg-yellow-500";
  } else {
    return "bg-white/20";
  }
}
