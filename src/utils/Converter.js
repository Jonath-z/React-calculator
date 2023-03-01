import { createRegExp, exactly } from "magic-regexp";

class Converter {
  operators = [];
  output = [];
  precedence = { "*": 2, "/": 2, "+": 1, "-": 1, "%": 0 };

  _shouldPlaceToTheRightPrecedenceOrder(nextToken) {
    if (this.operators.length === 0) return false;
    const lastOperator = this.operators[this.operators.length - 1];
    return this.precedence?.[lastOperator] >= this.precedence?.[nextToken];
  }

  toRPN(expressionSet) {
    for (let i = 0; i < expressionSet.length; i++) {
      const token = expressionSet[i];

      if (
        createRegExp(exactly("+").or("-").or("/").or("%").or("*")).test(token)
      ) {
        while (this._shouldPlaceToTheRightPrecedenceOrder(token)) {
          this.output.push(this.operators.pop());
        }
        this.operators.push(token);
      } else {
        this.output.push(token);
      }
    }

    for (let i = this.operators.length; i >= 0; i--) {
      this.output.push(this.operators[i]);
    }

    return this.output;
  }
}

export default Converter;
