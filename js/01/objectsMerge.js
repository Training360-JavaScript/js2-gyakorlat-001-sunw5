const objectsMerge = (...args) => {
  let mergedObject = {};
  for(let [i, e] of args.entries()) {
    mergedObject[i] = e;
  }
  return mergedObject;
};

export default objectsMerge;
