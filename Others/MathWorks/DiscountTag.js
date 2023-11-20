// Maximum even sum subsequence

// The approach to the problem can be shorted down to points:
// Sum up all positive numbers 
// If the sum is even then that will be the max sum possible 
// If the sum is not even then either subtract a positive odd number from it, or add a negative odd. 
// Find maximum max odd of negative odd numbers, hence sum+a[I] (as a[I] is itself negative) 
// Find minimum min odd of positive odd numbers, hence sun-a[I]. 
// The maximum of the both the results will be the answer.

function maxEvenSum(arr) {

    const n = arr.length;
    // Find sum of positive numbers 
    var pos_sum = 0;
    for (i = 0; i < n; ++i)
        if (arr[i] > 0)
            pos_sum += arr[i];

    // If sum is even, it is our 
    // answer 
    if (pos_sum % 2 == 0)
        return pos_sum;

    // Traverse the array to find the 
    // maximum sum by subtracting a 
    // positive odd or adding a 
    // negative odd 
    var ans = Number.MIN_VALUE;
    for (i = 0; i < n; ++i) {
        if (arr[i] % 2 != 0) {
            if (arr[i] > 0)
                ans = ans > (pos_sum - arr[i]) ? ans : (pos_sum - arr[i]);
            else
                ans = ans > (pos_sum + arr[i]) ? ans : (pos_sum + arr[i]);
        }
    }

    return ans;
}

// driver code
const test1 = [-2, 2, -3, 4, 5];
const test2 = [2, 3, 6, -5, 10, 1, 1]
let res = maxEvenSum(test1);
console.log(res);