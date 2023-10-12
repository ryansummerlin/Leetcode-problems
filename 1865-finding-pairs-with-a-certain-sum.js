// You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types:

// Add a positive integer to an element of a given index in the array nums2.
// Count the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given value (0 <= i < nums1.length and 0 <= j < nums2.length).
// Implement the FindSumPairs class:

// FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer arrays nums1 and nums2.
// void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
// int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.




// This is the correct way to do it. Basically you set up a hash map and solve it in the same way as some of these other sum problems
// where you take the total - the current value and check to see if it exists in the hash map. Time complexity here drops to O(n)
// instead of O(n * m) to cycle through both arrays and check every value.

var FindSumPairs = function(nums1, nums2) {
    this.arr1 = nums1;
    this.arr2 = nums2;

    this.hash = {};
    for (let i = 0; i < this.arr2.length; i++) {
        let num = this.arr2[i];
        if (!this.hash[num]) {
            this.hash[num] = 1;
        } else {
            this.hash[num] += 1;
        }
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.hash[this.arr2[index]] -= 1;
    this.arr2[index] += val;
    if (!this.hash[this.arr2[index]]) {
        this.hash[this.arr2[index]] = 1;
    } else {
        this.hash[this.arr2[index]] += 1;
    }

};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;

    for (let i = 0; i < this.arr1.length; i++) {
        let val = tot - this.arr1[i];
        if (this.hash[val]) count += this.hash[val];
    }

    return count;
};



// I'm timing out on this one when I tried to brute force it below but I guess it's just a hash map thing. I'll take a look
// later and try to sort it out. Seems like you have some sort of object/map to represent arr2 which lets you just cycle through
// arr1 when trying to find the sum. Similar to some other sum problems I've seen here before actually.

var FindSumPairs = function(nums1, nums2) {
    this.first = nums1;
    this.second = nums2;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.second[index] += val;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;
    let newFirst = [];
    let newSecond = [];
    for (let i = 0; i < this.first.length; i++) {
        let num = this.first[i];
        if (num < tot) newFirst.push(num);
    }

    for (let i = 0; i < this.second.length; i++) {
        let num = this.second[i];
        if (num < tot) newSecond.push(num);
    }

    for (let i = 0; i < newFirst.length; i++) {
        for (let j = 0; j < newSecond.length; j++) {
            if (newFirst[i] + newSecond[j] === tot) count++;
        }
    }

    return count;
};
