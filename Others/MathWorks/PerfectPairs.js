function countPerfectPairs(arr) {
    const n = arr.length;
    let perfectPairsCount = 0;

    for (let i = 1; i < n; i++) {
        const x = arr[i];

        let minAbsY = Infinity;
        let maxAbsY = -Infinity;

        for (let j = 0; j < i; j++) {
            const y = arr[j];

            // Update min and max values for y
            minAbsY = Math.min(minAbsY, Math.abs(y));
            maxAbsY = Math.max(maxAbsY, Math.abs(y));

            // Check conditions for a perfect pair
            const condition1 = Math.min(Math.abs(x - y), Math.abs(x + y)) < Math.min(Math.abs(x), Math.abs(y));
            const condition2 = Math.max(Math.abs(x - y), Math.abs(x + y)) >= Math.max(Math.abs(x), Math.abs(y));

            if (condition1 && condition2) {
                perfectPairsCount++;
            }
        }
    }

    return perfectPairsCount;
}

// Example usage
const arr = [2, 5, -3];
const result = countPerfectPairs(arr);
console.log("Number of perfect pairs:", result);
