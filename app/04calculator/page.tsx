export default function Calculator() {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-lime-300 to-pink-500 flex justify-center items-center">
      <div className="w-1/3 h-3/4 rounded-md bg-white space-y-10 p-6">
        <h1 className="font-bold text-4xl text-center">Calculator</h1>
        <input
          type="text"
          placeholder="0"
          className="w-full p-2 text-2xl text-right outline-none border-b-2 border-black"
        />
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((buttonValue) => (
              <button
                key={buttonValue}
                className="w-1/4 p-4 text-2xl hover:bg-slate-300 rounded-full"
              >
                {buttonValue}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
