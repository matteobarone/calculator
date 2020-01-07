export function getOperation(n1, n2) {
    switch(operatorSelected) {
      case OPERATORS.plus:
        return n1 + n2;
      case OPERATORS.minus:
        return n1 - n2;
      case OPERATORS.multi:
        return n1 * n2;
      case OPERATORS.divide:
        return n1 / n2;
      default:
        return;
    }
};