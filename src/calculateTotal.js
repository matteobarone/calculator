import{getOperation} from './getOperation';

//Nome file: calculateTotal
//Dipende solo da "getOperation"
export function calculateTotal(value1, value2) {
  if (value1 === '' || value2 === '') {
    return '--';
  }

  const n1 = parseInt(value1);
  const n2 = parseInt(value2);

  return getOperation(n1, n2);
}