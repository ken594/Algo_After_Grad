// July 31st 
// 88. Merge Sorted Array || Array || Two Pointers || Sorting

// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. 
// nums2 has a length of n.

// Working from the end of nums1
// Using three pointers
// Time: O(m+n) Space: O(1)
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    for (let k = nums1.length - 1; k >= 0; k--) {
        if (j < 0) return;
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i--];
        } else {
            nums1[k] = nums2[j--];
        }
    }
};