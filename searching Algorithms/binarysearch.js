// psuedo-code to apply binary search concept and solution
// the function accepts a sorted array and a value
// create a left pointer at the start of the array, and a right pointer at the end of the array
// check if element being looking for is found;
// while the left pointer comes before the right pointer: 
    // create a pointer in the middle
    // if value is found return the index
    // if the value is too small move the left pointer up
    // if the value is too large move the right pointer down
// if value is not found, return -1

function binarySearch(arr, value){
    
    // create the start and end points and the middle point(for the pointer)
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);

    // loop to find desired result, avoid endless loop with second condition
    while(arr[middle] !== value && start <= end){
        // check whether the value being looked for is greater or less than the middle to determine next start and end points
        if(value < arr[middle]){
            // if its less then the starting point remains same but end is moved to value before the middle
            end = middle - 1;
        } else {
            // if its more then the end point remains the same but starting point starts at the value after the middle
            start = middle + 1;
        }
        // get a new middle point
        middle = Math.floor((start + end) / 2);
    }

    return arr.indexOf(value);
    

}

console.log(binarySearch([2, 4, 8, 12, 64, 72, 80, 88, 98, 100, 105, 107, 200, 230], 900));