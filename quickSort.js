Array.prototype.quickSort = function () {
    if (this.length < 2) {
        return this;
    } else {
        let strongPoint = this[0];
        let less = [];
        let more = [];

        for (const element of this) {
            if (element > strongPoint) {
                more.push(element);
            } else if (element < strongPoint) { 
                less.push(element);
            }
        }
        return [...less.quickSort(), strongPoint, ...more.quickSort()];
    }
};

console.log([1, 56, 34, 23, 567, 9].quickSort());
