import { createRegExp, exactly } from "magic-regexp";
import Converter from "./Converter";

class Calculator extends Converter {
  add(value1, value2) {
    return Number(value1) + Number(value2);
  }

  multiply(value1, value2) {
    return Number(value1) * Number(value2);
  }

  divide(value1, value2) {
    let result = Number(value1) / Number(value2);
    return result === Infinity ? "E" : result;
  }

  substract(value1, value2) {
    return Number(value1) - Number(value2);
  }

  modulo(value1, value2) {
    return Number(value1) % Number(value2);
  }

  _formatExpression(expression) {
    const regExp = createRegExp(
      exactly("+").or("-").or("/").or("%").or("*").grouped()
    );

    const expressionComponents = expression.trim().split(regExp);
    return expressionComponents.filter((el) => el !== "");
  }

  evaluate(expression) {
    const RNPExpression = this.toRPN(this._formatExpression(expression));
    console.log({ RNPExpression });
    return RNPExpression;
  }
}

const calculator = new Calculator();
export default calculator;
