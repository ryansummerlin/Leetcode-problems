// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.


// I'm not sure what's going on with this but I can't pass these leetcode tests no matter what I do. Even the approved solutions are
// popping up with all sorts of errors. I thought I basically had it with an object structure, but objects have to make all keys
// strings so a map is actually a better structure. However, I'm getting all sorts of issues with the map as well. Not sure what to
// do and don't really care at this point.


var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.get(val)) {
        return false;
    } else {
        this.map.set(val, this.array.length);
        this.array.push(val);
        return true;
    }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const swap = function(idx, end, arr) {
        const temp = arr[idx];
        arr[idx] = arr[end]
        arr[end] = temp;
    }

    if (this.map.has(val)) {
        const idx = this.map.get(val);
        swap(idx, this.array.length - 1, this.arr);
        this.array.pop();
        this.map.set(this.array[idx], idx);
        this.map.delete(val);
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let idx = Math.floor(Math.random() * this.array.length);
    return this.array[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
