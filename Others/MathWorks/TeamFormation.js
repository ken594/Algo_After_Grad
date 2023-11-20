function countTeams(rating, queries) {
    const n = rating.length;
    const results = [];

    for (const query of queries) {
        const [l, r] = query;
        const seen = {};
        let teams = 0;

        for (let i = l - 1; i < r; i++) {
            if (seen[rating[i]] !== undefined && !seen[rating[i]]) {
                teams++;
                seen[rating[i]] = true;
            } else if (seen[rating[i]] === undefined) {
                seen[rating[i]] = false;
            }
        }

        results.push(teams);
    }

    return results;
}

// Example usage:
const rating = [2, 3, 4, 2];
const queries = [[1, 4], [3, 4]];

const result = countTeams(rating, queries);
console.log(result); // Output: [1, 0]
