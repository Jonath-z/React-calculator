import { createRegExp, exactly, groupeAs } from "magic-regexp";

class Calculator {
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

  formatExpression(expression) {
    const regExp = createRegExp(
      exactly("+").or("-").or("/").or("%").or("*").grouped()
    );

    console.log({ regExp });
    const expressionComponents = expression.trim().split(regExp);
    console.log(expressionComponents);
    return expressionComponents;
  }
}

const calculator = new Calculator();
export default calculator;
