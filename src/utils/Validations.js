import { createRegExp, exactly } from "magic-regexp";

class Validations {
  hasTwoZerosAtTheBegining(expression) {
    return createRegExp(exactly("0").times(2).at.lineStart(2)).test(expression);
  }

  hasStartedWithAdot(expression) {
    return createRegExp(exactly(".").at.lineStart(0)).test(expression);
  }

  hasStartedWithASigns(expression) {
    return createRegExp(
      exactly("+").or("/").or("%").or("*").at.lineStart(1)
    ).test(expression);
  }

  hasTwoConsecutiveDots(expression) {
    return createRegExp(exactly(".").times(2)).test(expression);
  }

  hasTwoDotsInOneNumber(expression) {
    let itHas = false;
    const reg = createRegExp(exactly("+").or("-").or("/").or("%").or("*"));
    expression.split(reg).forEach((_expression) => {
      [..._expression].filter((letter) => letter === ".").length >= 2
        ? (itHas = true)
        : (itHas = false);
    });

    return itHas;
  }

  hasTwoConsecutiveSigns(expression) {
    return createRegExp(
      exactly("+").or("-").or("/").or("%").or("*").or(".").times(2)
    ).test(expression);
  }
}

const validations = new Validations();
export default validations;
