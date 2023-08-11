Array.prototype.linearSearch = function (guess) {
  for (let i = 0; i < this.length - 1; i ++) {
    if (guess === this[i]) {
      return i;
    }
  }
  return - 1;
}
