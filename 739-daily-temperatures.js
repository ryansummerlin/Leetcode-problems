// Given an array of integers temperatures represents the daily temperatures, return an array answer such that
// answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no
// future day for which this is possible, keep answer[i] == 0 instead.




// This is my first solution - it works but has terrible time complexity at O(n^2). I think there's a quicker way to do this
// using stacks. I will try to figure it out and post below.

var dailyTemperatures = function(temperatures) {
    let result = [];
    for (let i = 0; i < temperatures.length; i++) {
        let current = temperatures[i];
        let j = i + 1;
        while (temperatures[j] <= current && j < temperatures.length) {
            j++;
        }
        if (j === temperatures.length) {
            result.push(0);
        } else {
            result.push(j - i);
        }
    }

    return result;
};



// I had to go look up the stack solution - it's a little bit tricky but it makes sense when you think about it. The key insight is that
// you have to store the indexes, not the actual temperatures in the stack. Then, you loop through the temperatures and compare
// the current temperature to the temperature at the index at the top of the stack. If the current temp is greater than the top of
// the stack, you keep popping items off the top of the stack, while setting the result array to the distance between i and the index
// that just got popped off the stack until you iterate through the whole list. Time complexity is a bit weird but I think it should
// just be O(n). Space complexity is also O(n) because of the stack + result array.



var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};
