// Aug 10th
// 45. Jump Game II

/*
You are given a 0-indexed array of integers nums of length n.
You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i.
In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // end is the furthest starting index of the current jump
    let end = 0;
    // far is the furthest reachable index of the current jump
    let far = 0;
    let answer = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // update the furthest reachable for this current jump
        far = Math.max(far, i + nums[i]);
        // if i == end, we know we reach the end of the current jump
        if (i == end) {
            // we update the current jump to be the furthest reachable
            end = far;
            // increment the answer since we are moving to the next jump
            answer++;
        }
    }
    return answer;
};


