function getMaximumSum(a, b, n, x, y) {
    const v = [];
    let tsum = 0;
    for (let i = 0; i < n; i++) {
        v.push([(Math.abs(a[i] - b[i])), a[i], b[i]]);
    }
    v.sort((a, b) => b[0] - a[0]);
    // console.log(v);
    // v.reverse();
    for (let i = 0; i < v.length; i++) {
        if (v[i][1] > v[i][2] && x > 0) {
            tsum += v[i][1];
            x--;
        }
        else if (v[i][1] < v[i][2] && y > 0) {
            tsum += v[i][2];
            y--;
        }
        else {
            tsum += Math.min(v[i][2], v[i][1]);
        }
    }
    return tsum;
}

// Driver Code
// let x = 3;
// let y = 2;
// let a = [1, 2, 3, 4, 5];
// let b = [5, 4, 3, 2, 1];
// let n = a.length;

// sample case 2
let x = 3;
let y = 1;
let a = [1, 2, 3, 2];
let b = [1, 2, 3, 2];
let n = a.length;


const res = getMaximumSum(a, b, n, x, y);
console.log(res);
// console.log(getMaximumSum(a, b, n, x, y))

// This program is contributed by Pushpesh Raj.
