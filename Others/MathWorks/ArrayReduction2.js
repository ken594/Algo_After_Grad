function getMinSize(arr) {
    const res = [];
    const n = arr.length;

    // if the array is not sorted, then sort the array
    arr.sort((a, b) => a - b);
    console.log(arr);

    // two pointer methods
    // get the middle pointer
    let i = Math.floor(n / 2) - 1;
    // if (n % 2 !== 0) i--;
    console.log(i);

    // fill in the right half of the array
    for (let k = i + 1; k < n; k++) {
        res.push(arr[k]);
    }

    console.log(res);

    // iterate through the array from the end
    for (let j = n - 1; i >= 0; i--) {
        // if 2 * arr[i] > arr[j], then continue
        if (2 * arr[i] > arr[j]) {
            res.push(arr[i]);
        }
        // if 2 * arr[i] <= arr[j], then j--
        else {
            j--;
        }
    }

    return res;
}

// Note: coule be swap the value and then slice the right half of the array

// console.log(getMinSize([5, 3, 4, 7, 9, 12, 77, 65, 29, 1])); // [ 9, 12, 29, 65, 77 ]
console.log(getMinSize([1, 2, 3, 4, 16, 32, 64]));  // [ 4, 16, 32, 64 ]
