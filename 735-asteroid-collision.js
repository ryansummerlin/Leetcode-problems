// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right,
// negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are
// the same size, both will explode. Two asteroids moving in the same direction will never meet.


// The key insight here is that you want to use a stack for the end result. Basically, you loop through the asteroid array
// and compare the current value to the top of the result stack. If the asteroids won't collide, then you push the current
// val to the top of the stack and move on. If the asteroid will collide, you keep popping items off of the result stack
// until you get to a point where you can add the current value. Time complexity here should be O(n) - you're looping through
// the entire asteroid set about once, and space complexity is the same (worst case you create a copy of the original array)



var asteroidCollision = function(asteroids) {
    let stack = [asteroids[0]];
    for (let i = 1; i < asteroids.length; i++) {
        let el = asteroids[i];
        let top = stack[stack.length - 1];
        if ((el > 0 && top > 0) || (el < 0 && top < 0) || (top < 0 && el > 0) || stack.length === 0) {
            stack.push(el);
        } else if (Math.abs(el) === Math.abs(top)) {
            stack.pop();
        } else if (Math.abs(el) > Math.abs(top)) {
            stack.pop();
            i--;
        }
    }

    return stack;
};
