var Vector = function (components) {

  this.components = components;
  this.add = function (secondVector) {
    if (this.components.length !== secondVector.components.length) {
      throw new Error('Vectors must have the same length.');
    }

    const result = this.components.map((value, i) => value + secondVector.components[i]);
    return new Vector(result);
  };

  this.subtract = function (secondVector) {
    if (this.components.length !== secondVector.components.length) {
      throw new Error('Vectors must have the same length.');
    }

    const result = this.components.map((value, i) => value - secondVector.components[i]);
    return new Vector(result);
  };
  this.dot = function (secondVector) {

    if (this.components.length !== secondVector.components.length) {
      throw new Error('Vectors must have the same length.');
    }
    let result = 0;
    for (let index = 0; index < this.components.length; index++) {
      result += (this.components[index] * secondVector.components[index]);
    }
    return result;
  };
  this.norm = function () {
    let result = 0;
    for (let index = 0; index < this.components.length; index++) {
      result += (this.components[index] **2);
    }
    return Math.sqrt(result);
  };
   this.equals = function (secondVector) {
    if (this.components.length !== secondVector.components.length) {
      return false; // Вектори різної довжини не можуть бути однаковими.
    }

    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== secondVector.components[i]) {
        return false; // Знайдено різні компоненти.
      }
    }

    return true; // Вектори ідентичні.
  };
  this.toString = function () {
    return `(${this.components.join(',')})`;
  };
};
