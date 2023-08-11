Array.prototype.binarySearch = function(item) {
  let low = 0;
  let high = this.length -1;
  while(low <= high) {
    const mid = Math.floor(low + high);
    const guess = this[mid];
    if(guess === item) {
      return mid;   
    }
    else if(guess < item) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
  }
  return -1;
}
