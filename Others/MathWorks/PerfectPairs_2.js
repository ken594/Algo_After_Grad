function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] < target) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function countPerfectPairs(arr) {
    const n = arr.length;
    let perfectPairsCount = 0;

    // Convert arr[i] to |arr[i]|
    const sortedArr = arr.map(Math.abs).sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        const x = Math.abs(arr[i]);

        // Find the index of the largest element in sortedArr that is smaller than or equal to x
        const index = binarySearch(sortedArr, x);

        // Sum up the count of valid pairs
        if (index !== -1) {
            perfectPairsCount += index;
        }
    }

    return perfectPairsCount;
}

// Example usage
const arr = [2, 5, -3];
const result = countPerfectPairs(arr);
console.log("Number of perfect pairs:", result);
