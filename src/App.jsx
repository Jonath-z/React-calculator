import { useState } from "react";
import Button from "./components/Button";
import calculator from "./utils/Calculations";
import validations from "./utils/Validations";
import { RiDeleteBack2Fill } from "react-icons/ri";

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");

  function addToExpression(value) {
    setAnswer("");
    setExpression((prev) => {
      let newValue = `${prev}${value}`;
      if (prev.length <= 8) {
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
      }
      return prev;
    });
  }

  return (
    <div className="w-[32rem] h-[44rem] mx-auto">
      <div className="flex flex-col justify-start py-10 overscroll-y-contain">
        <div className="text-8xl m-0 p-0 min-h-[6rem] transition-all bg-gray-600 text-white rounded-sm">
          {answer || expression}
        </div>
      </div>
      <div className="border-2 border-solid border-black grid text-3xl grid-cols-4 grid-rows-5 divide-x-2 divide-y-2 w-[32rem] h-[44rem]">
        <button
          className="h-full w-full bg-orange-500 hover:bg-red-600 transition-all font-bold text-white"
          onClick={() => {
            setExpression("");
            setAnswer("");
          }}
        >
          AC
        </button>
        <button
          className="h-full w-full bg-orange-500 flex justify-center items-center hover:bg-red-600 transition-all font-bold text-white"
          onClick={() => {
            setExpression((prev) => prev.slice(0, -1));
          }}
        >
          <RiDeleteBack2Fill />
        </button>
        <Button value="%" onClick={addToExpression} type="sign" />
        <Button value="/" onClick={addToExpression} type="sign" />
        <Button value="7" onClick={addToExpression} />
        <Button value="8" onClick={addToExpression} />
        <Button value="9" onClick={addToExpression} />
        <Button value="*" onClick={addToExpression} type="sign" />
        <Button value="4" onClick={addToExpression} />
        <Button value="5" onClick={addToExpression} />
        <Button value="6" onClick={addToExpression} />
        <Button value="-" onClick={addToExpression} type="sign" />
        <Button value="1" onClick={addToExpression} />
        <Button value="2" onClick={addToExpression} />
        <Button value="3" onClick={addToExpression} />
        <Button value="+" onClick={addToExpression} type="sign" />
        <Button value="0" onClick={addToExpression} />
        <Button value="." onClick={addToExpression} />
        <button
          onClick={() => {
            setAnswer(
              isNaN(calculator.evaluate(expression))
                ? "E"
                : calculator.evaluate(String(expression))
            );
          }}
          className="h-full w-full bg-orange-500 hover:bg-white hover:text-orange-600 transition-all col-span-2 font-bold text-white "
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
