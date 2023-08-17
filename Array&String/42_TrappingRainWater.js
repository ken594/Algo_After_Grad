// Aug 16th
// 42. Trapping Rain Water

/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
// Two pointers
var trap = function(height) {
    const n = height.length;
    if (n === 0) return 0;

    let left = 0;
    let right = n - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let res = 0;

    while (left < right) {
        // let diff;
        if (maxLeft <= maxRight) {
            left++;
            // diff = maxLeft - height[left];
            // if (diff > 0) res += diff;
            // maxLeft = Math.max(maxLeft, height[left]);
            maxLeft = Math.max(maxLeft, height[left]);
            res += maxLeft - height[left];
        } else {
            right--;
            // diff = maxRight - height[right];
            // if (diff > 0) res += diff;
            // maxRight = Math.max(maxRight, height[right]);
            maxRight = Math.max(maxRight, height[right]);
            res += maxRight - height[right];
        }
    }
    return res;
};

// Two Pass
// O(n) || O(n)
var trap = function(height) {
    const n = height.length;
    const maxLeftArray = Array(n).fill(0);
    let maxLeft = height[0];
    for (let i = 1; i < n; i++) {
        if (height[i - 1] > maxLeft) maxLeft = height[i - 1];
        maxLeftArray[i] = maxLeft;
    }

    const maxRightArray = Array(n).fill(0);
    let maxRight = height[n - 1];
    let res = 0;
    for (let i = n - 2; i >= 0; i--) {
        if (height[i + 1] > maxRight) maxRight = height[i + 1];
        maxRightArray[i] = maxRight;
        let diff = Math.min(maxLeftArray[i], maxRightArray[i]) - height[i];
        if (diff > 0) res += diff;
    }

    return res;
};