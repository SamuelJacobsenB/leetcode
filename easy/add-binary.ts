function addBinary(a: string, b: string): string {
  let sum = "";

  const bigger = a.length > b.length ? a.length : b.length;

  let i = 0;
  let lastSum = 0;
  while (i < bigger) {
    const curA = a[a.length - 1 - i];
    const curB = b[b.length - 1 - i];

    if (curA == "1" && curB == "1") {
      sum = lastSum + sum;
      lastSum = 1;
    } else if ((curA == "0" || !curA) && (curB == "0" || !curB)) {
      sum = lastSum + sum;
      lastSum = 0;
    } else {
      if (lastSum) {
        sum = "0" + sum;
        lastSum = 1;
      } else {
        sum = "1" + sum;
        lastSum = 0;
      }
    }

    i++;
  }

  if (lastSum) sum = "1" + sum;

  return sum;
}
