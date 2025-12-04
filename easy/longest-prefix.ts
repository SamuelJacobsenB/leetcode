function longestCommonPrefix(strs: string[]): string {
  let prefix: string[] = strs[0].split("");

  for (let idx = 1; idx < strs.length; idx++) {
    const strArr = strs[idx].split("");
    for (let i = 0; i < prefix.length; i++) {
      if (strArr[i] != prefix[i]) {
        prefix = prefix.slice(0, i);
        break;
      }
    }
  }

  return prefix.join("");
}
