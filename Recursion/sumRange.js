// second recursive example
// base case: if(num === 1) return 1;
// inputs: numbers in range of the recursive call

function sumRange(num){
    if(num === 1) {
        return 1;
    }
    // recursive call below
    return num + sumRange(num - 1);
}

// Call the function and print the result
console.log(sumRange(5));


// This function calculates the sum of a range of numbers from 1 to num (inclusive).

// Args:
//     num: The upper limit of the range.

// Returns:
//     The sum of the numbers in the range.
