function getRootProperty(object, integer) {

  for (let [key, values] of Object.entries(object)) {
    if (Array.isArray(values)) {
      for (index in values) {
        if (values[index] == integer) {
          return key;
        }
      }
    } else if (typeof values === 'object') {
      const result = getRootProperty(values, integer);
      if (result !== null) {
        return key;
      }
    }
  }
  return null;
};
object1 = {
  "one": {
    "nest1": {
      "val1": [9, 34, 92, 100]
    }
  },
  "2f7": {
    "n1": [10, 92, 53, 71],
    "n2": [82, 34, 6, 19]
  }
}
object2 = {
  "r1n": {
    "mkg": {
      "zma": [21, 45, 66, 111],
      "mii": {
        "ltf": [2, 5, 3, 9, 21]
      },
      "fv": [1, 3, 6, 9]
    },
    "rmk": {
      "amr": [50, 50, 100, 150, 250]
    }
  },
  "fik": {
    "er": [592, 92, 32, 13],
    "gp": [12, 34, 116, 29]
  }
}
let example1 = getRootProperty(object1, 9)
let example2 = getRootProperty(object1, 6)
let example3 = getRootProperty(object2, 100)
let example4 = getRootProperty(object2, 12)
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
