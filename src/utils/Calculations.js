import { createRegExp, exactly } from "magic-regexp";
import Converter from "./Converter";

// extent the Reverse polish Notation converter class
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
    // regular expression that checks if the expression contains any arithmetic signs
    const regExp = createRegExp(
      exactly("+").or("-").or("/").or("%").or("*").grouped()
    );

    // split the expression by operator sign
    const expressionComponents = expression.split(regExp);
    return expressionComponents.filter((el) => el !== "");
  }

  evaluate(expression) {
    // get the Reverse Polish notation
    const RPNExpression = this.toRPN(this._formatExpression(expression));

    let stack = [];

    for (let i = 0; i < RPNExpression.length; i++) {
      const token = RPNExpression[i];

      if (!this.isNotNumber(token)) {
        stack.push(token);
      } else {
        switch (token) {
          case "+":
            stack.push(this.add(stack.pop(), stack.pop()));
            break;
          case "-":
            // reverse the result because  of pop (it returns the last element in the stack)
            stack.push(-this.substract(stack.pop(), stack.pop()));
            break;
          case "*":
            stack.push(this.multiply(stack.pop(), stack.pop()));
            break;
          case "/":
            let arangedStackForDivision = [stack.pop(), stack.pop()].reverse();
            stack.push(
              this.divide(
                arangedStackForDivision[0],
                arangedStackForDivision[1]
              )
            );
            break;
          case "%":
            let arangedStackForModulo = [stack.pop(), stack.pop()].reverse();
            stack.push(
              this.modulo(arangedStackForModulo[0], arangedStackForModulo[1])
            );
            break;
          default:
        }
      }
    }

    this.output = [];
    this.operators = [];
    return stack[0];
  }
}

const calculator = new Calculator();
export default calculator;
