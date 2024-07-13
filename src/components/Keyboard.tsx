const keyboardButtons = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "BACK",
];

interface KeyboardProps {
  handleClick: (letter: string) => void;
}

export default function Keyboard({ handleClick }: KeyboardProps) {
  const firstRow = keyboardButtons.slice(0, 10);
  const secondRow = keyboardButtons.slice(10, 19);
  const thirdRow = keyboardButtons.slice(19);

  return (
    <div className="flex flex-col items-center gap-2 pt-5">
      <div className="flex gap-2">
        {firstRow.map((keyBtn) => (
          <div
            key={keyBtn}
            className="bg-white/30 text-white p-3 font-semibold cursor-pointer rounded-md"
            onClick={() => handleClick(keyBtn)}
          >
            {keyBtn}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {secondRow.map((keyBtn) => (
          <div
            key={keyBtn}
            className="bg-white/30 text-white p-3 font-semibold cursor-pointer rounded-md"
            onClick={() => handleClick(keyBtn)}
          >
            {keyBtn}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {thirdRow.map((keyBtn) => (
          <div
            key={keyBtn}
            className="bg-white/30 text-white p-3 font-semibold cursor-pointer rounded-md"
            onClick={() => handleClick(keyBtn)}
          >
            {keyBtn}
          </div>
        ))}
      </div>
    </div>
  );
}
