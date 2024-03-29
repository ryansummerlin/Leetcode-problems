// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are
// deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that
// they sum up to n.



// This one is much simpler than it appears at first glance. It takes 9 decibinary numbers to get to 9: 1 + 1 + 1...
// So the answer is just the maximum value at each index of the number.


var minPartitions = function(n) {
    let max = 0;
    for (let i = 0; i < n.length; i++) {
        let int = parseInt(n[i]);
        max = Math.max(int, max);
    }

    return max;
};
