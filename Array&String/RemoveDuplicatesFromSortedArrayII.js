// Aug 8th
// 80. Remove Duplicates from Sorted Array II
// Two Pointers || Arrays

/*
Given an integer array nums sorted in non-decreasing order,
remove some duplicates in-place such that each unique element appears at most twice.
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages,
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    // so far way better solution, Runtime: 58ms
    let i = 0;
    let seen = nums[0];
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
        // count >= 2 && nums[j] == seen
        // skip
        if (count >= 2 && nums[j] == seen) continue;

        // nums[j] != seen
        // reset count = 1 and set seen = nums[j]
        if (nums[j] != seen) {
            count = 1;
            seen = nums[j];
            nums[i] = nums[j];
            i++;
        }

        // else
        // nums[i] = nums[j]
        // i++
        // count++
        else {
            nums[i] = nums[j];
            i++;
            count++;
        }
    }
    return i;

    // Runtime 107s (SLOW)

    // used two pointers and a boolean flag to keep track of the duplicate values
    // let start = 0;
    // let isDuplicated = false;
    // for (let index = 1; index < nums.length; index++) {
    //     if (nums[start] == nums[index] && !isDuplicated) {
    //         // start = index;
    //         nums[++start] = nums[index];
    //         isDuplicated = true;
    //     } else if (nums[start] != nums[index]) {
    //         nums[++start] = nums[index];
    //         isDuplicated = false;
    //     }
    //     console.log(start);
    // }
    // return start+1;
};