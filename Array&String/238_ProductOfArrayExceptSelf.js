// Aug 15
// 238. Product of Array Except Self

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Extension of left and right product list
// O(n) || O(1)
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = Array(n);
    ans[0] = 1;

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return ans;
};


// use left and right product list
// O(n) || O(n)
var productExceptSelf = function(nums) {
    const n = nums.length;
    const leftProductList = Array(n);
    const rightProductList = Array(n);
    leftProductList[0] = 1;
    rightProductList[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        leftProductList[i] = leftProductList[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        rightProductList[i] = rightProductList[i + 1] * nums[i + 1];
    }

    const ans = Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = leftProductList[i] * rightProductList[i];
    }

    return ans;
};



// Brute Force
// calculate the product except this index
// O(n^2) || O(1)
var productExceptSelf = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            product *= nums[j];
        }
        ans.push(product);
    }
    return ans;
};