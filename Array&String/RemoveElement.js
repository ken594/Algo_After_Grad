// Aug 1st
// 27. Remove Element || Array || Two Pointers

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;
    // the last element that was swapped could be the value that we wanna remove
    // but we will check in the next iteration
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    
    return n;
}

// var removeElement = function(nums, val) {
    
//     let end = nums.length - 1;
//     let k = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         while (nums[end] == val) {
//             nums.pop();
//             end--;
//         }

//         if (i > nums) return k;
//         if (nums[i] == val) {
//             nums[i] = nums[end];
//             nums.pop();
//             end--;
//         }
//         k++;
//     }

//     return k;
// };