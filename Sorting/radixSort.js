// radix sort helpers 1. getDigit(num, place/pos): returns the digit in num at the given place value
                   // 2. digitCount(num): returns the number of digits in num
                //    3. mostDigits(nums): given an array of numbers, returns the number of digits in the largest numbers in the list

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// console.log(getDigit(2856, 0));

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(28560));

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
// console.log(mostDigits([23, 587, 89, 6543, 23456, 90]));

// define a function that accepts a list of numbers
// figure out how many digits the largest number has
// loop from k = 0 up to this largest number of digits
// for each iteration of the loop:
            // -create buckets for each digit(0 to 9)
            // -place each number in the corresponding bucket based on its kth digit
// replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end

function radixSort(nums){

    let maxDigitCount = mostDigits(nums);

    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([23, 587, 89, 6543, 23456, 90, 88776, 12, 6573]));