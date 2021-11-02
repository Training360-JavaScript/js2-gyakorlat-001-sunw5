function concatArrays(char, ...args) {
  let flattened = args.flat();
  let trimmed = flattened.map(e => e.trimEnd());
  let uniques = [...new Set(trimmed)];  
  
  return (uniques.filter((e) => !e.includes(char)));
}

export default concatArrays;