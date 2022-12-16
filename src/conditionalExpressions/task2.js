let value = true;
let findValueType = typeof value;
const result = (findValueType === 'boolean') ?  `{{Variable is boolean: ${value}}}`:
      (findValueType === 'number') ? `{{Variable is a number. It's square is: ${value ** 2}}}`:
      (findValueType === 'string') ? `{{Variable is a string: ${value}}}`:
      `{{Variable type is: ${typeof value}}}`
console.log(result);