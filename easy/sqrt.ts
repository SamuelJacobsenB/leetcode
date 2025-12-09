function mySqrt(x: number): number {
  let num = 0;

  while (true) {
    if (num * num > x) break;
    num += 0.1;
  }

  return Math.floor(num);
}
