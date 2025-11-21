Object.myAssign = function (target, ...sources) {
  sources.forEach(source => {
    for (const key in source) {
      // 可枚举

      if (source.hasOwnProperty(key)) {
        // 自身属性
        target[key] = source[key];
      }
    }
  })

  return target;
}