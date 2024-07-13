const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER','Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'],
];

interface KeyboardProps {
  guesses: string[];
  correctWord: string;
  handleClick: (letter: string) => void;
}

export default function Keyboard({ guesses, correctWord, handleClick }: KeyboardProps) {
  const letterStatus = getLetterStatus(guesses, correctWord);

  return (
    <div className="flex flex-col items-center gap-2 mt-3">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {row.map((key) => (
            <button
              key={key}
              className={`p-3 flex items-center border border-white/30 justify-center text-white text-xl rounded-md ${
                letterStatus[key] || 'bg-gray-500'
              }`}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function getLetterStatus(guesses: string[], correctWord: string) {
  const status: { [key: string]: string } = {};
  
  guesses.forEach((guess) => {
    guess.split('').forEach((letter, idx) => {
      if (correctWord[idx] === letter) {
        status[letter] = 'bg-green-500';
      } else if (correctWord.includes(letter)) {
        status[letter] = 'bg-yellow-500';
      } else {
        status[letter] = 'bg-white/20';
      }
    });
  });

  keys.flat().forEach(key => {
    if (!status[key]) {
      status[key] = 'bg-transparent';
    }
  });
  
  return status;
}
