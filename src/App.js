import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("0");

  function addToExpression(value) {
    setExpression((prev) => prev + value);
  }

  return (
    <div className="w-[32rem] h-[44rem] mx-auto">
      <div className="flex flex-col justify-start py-10 overscroll-y-contain">
        <div className="text-8xl m-0 p-0">0</div>
        <div className="text-7xl">{expression}</div>
      </div>
      <div className="border-2 border-solid border-black grid grid-cols-4 grid-rows-4 divide-x-2 divide-y-2 w-[32rem] h-[44rem]">
        <button
          className="h-full w-full bg-gray-300 text-3xl"
          onClick={(e) => addToExpression(1)}
        >
          1
        </button>
        <button className="h-full w-full bg-gray-300 text-3xl">2</button>
        <button className="h-full w-full bg-gray-300 text-3xl">3</button>
        <button className="h-full w-full bg-orange-500 text-3xl">/</button>

        <button className="h-full w-full bg-gray-300 text-3xl">4</button>
        <button className="h-full w-full bg-gray-300 text-3xl">5</button>
        <button className="h-full w-full bg-gray-300 text-3xl">6</button>
        <button className="h-full w-full bg-orange-500  text-3xl">*</button>

        <button className="h-full w-full bg-gray-300 text-3xl">7</button>
        <button className="h-full w-full bg-gray-300 text-3xl">8</button>
        <button className="h-full w-full bg-gray-300 text-3xl">9</button>
        <button className="h-full w-full bg-orange-500 text-3xl">-</button>

        <button className="h-full w-full bg-gray-300 text-3xl col-span-2">
          0
        </button>
        <button className="h-full w-full bg-orange-500 text-3xl">+</button>
        <button className="h-full w-full bg-orange-500 ">=</button>
      </div>
    </div>
  );
}

export default App;
