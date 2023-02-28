import { useState } from "react";
import "./App.css";
import calculator from "./utils/Calculations";

function App() {
  const [expression, setExpression] = useState("0");

  function addToExpression(value) {
    setExpression((prev) => (prev.length <= 8 ? prev + value : prev));
  }

  return (
    <div className="w-[32rem] h-[44rem] mx-auto">
      <div className="flex flex-col justify-start py-10 overscroll-y-contain">
        <div className="text-8xl m-0 p-0 min-h-max bg-gray-600 text-white rounded-sm">
          {expression}
        </div>
      </div>
      <div className="border-2 border-solid border-black grid text-3xl grid-cols-4 grid-rows-5 divide-x-2 divide-y-2 w-[32rem] h-[44rem]">
        <button
          className="h-full w-full bg-orange-500 font-bold text-white"
          onClick={(e) => setExpression("0")}
        >
          AC
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 font-bold text-white"
        >
          +/-
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 font-bold text-white"
        >
          %
        </button>
        <button
          className="h-full w-full bg-orange-500 font-bold text-white"
          onClick={(e) => addToExpression(e.target.textContent)}
        >
          /
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          7
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          8
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          9
        </button>

        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 font-bold text-white"
        >
          *
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          4
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          5
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          6
        </button>

        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 font-bold text-white"
        >
          -
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          1
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          2
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          3
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 font-bold text-white"
        >
          +
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 col-span-2"
        >
          0
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300"
        >
          .
        </button>
        <button
          onClick={() => calculator.formatExpression(expression)}
          className="h-full w-full bg-orange-500 font-bold text-white "
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
