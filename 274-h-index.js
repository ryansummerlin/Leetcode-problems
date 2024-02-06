// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
// return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given
// researcher has published at least h papers that have each been cited at least h times.


// The key here is just to sort everything first. From there you can walk through the entire array and check the hIndex at
// each value and update the maxHIndex to reflect the current max. Time complexity O(log(n)) bc of the sort. I think O(n)
// space complexity bc of the sort as well.


var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let maxHIndex = 0;
    let length = citations.length;
    for (let i = 0; i < length; i++) {
        let current = citations[i];
        currentHIndex = Math.min(current, length - i);
        maxHIndex = Math.max(currentHIndex, maxHIndex);
    }

    return maxHIndex;
};
