Object.myAssign = function (target, ...sources) {
  sources.forEach(source => {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  })

  return target;
}