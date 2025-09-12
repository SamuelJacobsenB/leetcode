function romanToInt(s: string): number {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  const arr = s.split("");

  while (arr.length > 0) {
    const currentValue = symbols[arr[0]];
    const previousValue = symbols[arr[1]];

    if (previousValue && currentValue < previousValue) {
      sum += previousValue - currentValue;
      arr.shift();
      arr.shift();
    } else {
      sum += currentValue;
      arr.shift();
    }
  }

  return sum;
}
