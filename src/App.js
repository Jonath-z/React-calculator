import { useState } from "react";
import "./App.css";
import calculator from "./utils/Calculations";
import validations from "./utils/Validations";

function App() {
  const [expression, setExpression] = useState("");

  function addToExpression(value) {
    setExpression((prev) => {
      if (prev.length <= 8) {
        let newValue = prev + value;

        if (
          !validations.hasTwoZerosAtTheBegining(newValue) &&
          !validations.hasStartedWithAdot(newValue) &&
          !validations.hasTwoConsecutiveDots(newValue) &&
          !validations.hasTwoConsecutiveSigns(newValue) &&
          !validations.hasStartedWithASigns(newValue) &&
          !validations.hasTwoDotsInOneNumber(newValue)
        )
          return newValue;
        else {
          newValue = prev;
          return prev;
        }
      } else return prev;
    });
  }

  return (
    <div className="w-[32rem] h-[44rem] mx-auto">
      <div className="flex flex-col justify-start py-10 overscroll-y-contain">
        <input
          value={expression}
          className="text-8xl m-0 p-0 min-h-[6rem] transition-all bg-gray-600 text-white rounded-sm"
        />
      </div>
      <div className="border-2 border-solid border-black grid text-3xl grid-cols-4 grid-rows-5 divide-x-2 divide-y-2 w-[32rem] h-[44rem]">
        <button
          className="h-full w-full bg-orange-500 col-span-2 hover:bg-orange-600 transition-all font-bold text-white"
          onClick={(e) => setExpression("")}
        >
          AC
        </button>
        {/* TODO: for later implementation */}
        {/* <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 hover:bg-red-600 transition-all font-bold text-white"
        >
          +/-
        </button> */}
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
        >
          %
        </button>
        <button
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
          onClick={(e) => addToExpression(e.target.textContent)}
        >
          /
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          7
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          8
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          9
        </button>

        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
        >
          *
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          4
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          5
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          6
        </button>

        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
        >
          -
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          1
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          2
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          3
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
        >
          +
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all col-span-2"
        >
          0
        </button>
        <button
          onClick={(e) => addToExpression(e.target.textContent)}
          className="h-full w-full bg-gray-300 hover:bg-gray-400 transition-all"
        >
          .
        </button>
        <button
          onClick={() => {
            setExpression(
              isNaN(calculator.evaluate(expression))
                ? "E"
                : calculator.evaluate(expression)
            );
          }}
          className="h-full w-full bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white "
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
